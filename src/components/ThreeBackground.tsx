import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const materialRef = useRef<THREE.PointsMaterial | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);

  // Initialize Three.js scene once
  useEffect(() => {
    if (!containerRef.current) return;

    let isRunning = true;
    let animationFrameId: number;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    const count = 1800;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 15;

      colors[i] = Math.random();
      colors[i + 1] = Math.random();
      colors[i + 2] = Math.random();
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometryRef.current = particlesGeometry;

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.016,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.001,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      opacity: 0.8,
    });
    materialRef.current = particlesMaterial;

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      if (!isRunning) return;
      
      animationFrameId = requestAnimationFrame(animate);
      
      particles.rotation.y += 0.0006;
      particles.rotation.x += 0.0003;

      particles.position.x += (mouseX - particles.position.x) * 0.03;
      particles.position.y += (-mouseY - particles.position.y) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (isRunning) {
        animate();
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particles);
      renderer.dispose();

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Dynamically adapt particle shader material when theme changes
  useEffect(() => {
    const mat = materialRef.current;
    const geom = geometryRef.current;
    if (!mat || !geom) return;

    const isLight = theme === 'light';
    mat.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
    mat.opacity = isLight ? 0.45 : 0.85;
    mat.size = isLight ? 0.022 : 0.016;

    const colorsAttr = geom.getAttribute('color') as THREE.BufferAttribute | undefined;
    if (colorsAttr) {
      const colors = colorsAttr.array as Float32Array;
      const count = colors.length / 3;

      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        if (isLight) {
          // Sophisticated violet/indigo/slate palette for light canvas
          const palette = [
            [0.49, 0.23, 0.93], // purple-600
            [0.15, 0.39, 0.92], // blue-600
            [0.03, 0.57, 0.70], // cyan-600
            [0.39, 0.45, 0.55], // slate-500
          ];
          const choice = palette[i % palette.length];
          colors[idx] = choice[0];
          colors[idx + 1] = choice[1];
          colors[idx + 2] = choice[2];
        } else {
          // Luminous cyber glow palette for dark canvas
          colors[idx] = 0.4 + Math.random() * 0.6;
          colors[idx + 1] = 0.3 + Math.random() * 0.7;
          colors[idx + 2] = 0.7 + Math.random() * 0.3;
        }
      }
      colorsAttr.needsUpdate = true;
    }

    mat.needsUpdate = true;
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 bg-[#020205] dark:bg-[#020205] [html.light_&]:bg-[#f8fafc] pointer-events-none transition-colors duration-500" 
    />
  );
}
