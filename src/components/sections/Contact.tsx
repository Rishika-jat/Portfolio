import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, Twitter, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setStatusMsg('Please complete all form fields.');
      return;
    }

    setStatus('submitting');
    setStatusMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMsg(data.message || 'Your message has been successfully transmitted!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Server error occurred. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMsg('Connection failed. Please verify that the local server is operating.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em]">05. Connection</h2>
              <h3 className="text-5xl md:text-6xl font-display font-bold">Let's build <br />the <span className="text-gradient">next big thing</span></h3>
            </div>

            <div className="space-y-8">
              <p className="text-white/60 text-lg font-light leading-relaxed">
                I'm currently looking for new opportunities and collaborations. If you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                 <a href="mailto:rishikajat03@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Mail className="group-hover:text-white" />
                    </div>
                    <div>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-medium">Email Me</p>
                        <p className="text-lg font-medium group-hover:text-primary transition-colors">rishikajat03@gmail.com</p>
                    </div>
                 </a>
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                        <MapPin className="text-white/60" />
                    </div>
                    <div>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-medium">Location</p>
                        <p className="text-lg font-medium">Indore, India</p>
                    </div>
                 </div>
              </div>

              <div className="flex gap-4">
                {[
                    { icon: Github, href: 'https://github.com/Rishika-jat' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/rishika-jat' },
                    { icon: Twitter, href: '#' }
                ].map((social, i) => (
                    <a 
                        key={i} 
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1"
                    >
                        <social.icon size={20} />
                    </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl space-y-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors font-sans text-sm" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors font-sans text-sm" 
                    placeholder="john@example.com" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors font-sans text-sm" 
                  placeholder="Project Discovery" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors font-sans text-sm min-h-[150px] resize-none" 
                  placeholder="Let's build something awesome..." 
                  required
                />
              </div>

              {statusMsg && (
                <div className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                  status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {status === 'success' ? <CheckCircle2 className="shrink-0 mt-0.5" size={16} /> : <AlertCircle className="shrink-0 mt-0.5" size={16} />}
                  <span>{statusMsg}</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Delivering...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 text-center">
            <p className="text-white/30 text-xs font-mono uppercase tracking-[0.3em]">
                &copy; {new Date().getFullYear()} Rishika Jat. All rights reserved.
            </p>
        </footer>
      </div>
    </section>
  );
}

