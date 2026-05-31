import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse incoming request payloads
  app.use(express.json());

  // In-memory logs for standard feedback viewing if needed (strictly local)
  const contactMessages: Array<any> = [];

  // API contact endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields: name, email, subject, and message are all required." 
      });
    }

    // Save locally for persistence during session logs
    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };
    contactMessages.push(contactData);

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "rishikajat03@gmail.com";

    console.log(`[Contact Form Received]: Name: ${name}, Email: ${email}, Subject: ${subject}`);

    // If SMTP credentials are configured, send a REAL email!
    if (smtpHost && smtpPort && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort),
          secure: parseInt(smtpPort) === 465, // true for port 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailOptions = {
          from: `"${name}" <${smtpUser}>`, // Send through authenticated account
          replyTo: email,
          to: receiverEmail,
          subject: `Portfolio Message: ${subject}`,
          text: `You received a message from your portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #8B5CF6;">New Portfolio Message</h2>
              <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${message}</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`[Success] Real email dispatched successfully via SMTP to: ${receiverEmail}`);
        return res.json({ 
          success: true, 
          message: "Message successfully transmitted to Rishika's inbox!" 
        });
      } catch (error: any) {
        console.error("[Error] Nodemailer transmission failed:", error);
        return res.status(500).json({ 
          success: false, 
          error: "Failed to dispatch email via SMTP. Please try again later.",
          details: error.message 
        });
      }
    } else {
      // Elegant, fast simulation success callback
      console.log("[Simulation Mode] No SMTP config found in variables. Logging contact details instead.");
      console.log(`====================== MOCK EMAIL STORED ======================`);
      console.log(`To: ${receiverEmail}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: [MOCK] ${subject}`);
      console.log(`Message: \n${message}`);
      console.log(`=============================================================`);

      return res.json({ 
        success: true, 
        message: "Message simulation success! (To send real emails, declare SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS variables in Secrets/Env)." 
      });
    }
  });

  // Serve recent contact form inputs if developer needs to check (strictly internal helper)
  app.get("/api/contact/messages", (req, res) => {
    res.json({ success: true, messages: contactMessages });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server Ready] Running on port http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server bootstrap failure:", err);
});
