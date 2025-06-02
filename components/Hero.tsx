"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("three").then((THREE) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create a simple, elegant geometric shape
        const geometry = new THREE.SphereGeometry(8, 32, 32);
        const material = new THREE.MeshBasicMaterial({
          color: 0x3b82f6,
          wireframe: true,
          transparent: true,
          opacity: 0.2,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Add subtle background particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 100;
        }

        particlesGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(posArray, 3)
        );
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.1,
          color: 0x3b82f6,
          transparent: true,
          opacity: 0.4,
        });

        const particlesMesh = new THREE.Points(
          particlesGeometry,
          particlesMaterial
        );
        scene.add(particlesMesh);

        camera.position.z = 30;

        const animate = () => {
          requestAnimationFrame(animate);

          // Subtle rotation
          sphere.rotation.y += 0.002;
          sphere.rotation.x += 0.001;

          // Gentle movement for particles
          particlesMesh.rotation.y += 0.0003;

          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          renderer.dispose();
        };
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-foreground">
          IT & SOFTWARE Trend Agency
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Crafting Digital Experiences Through
          <span className="text-primary"> 3D Animations</span>,
          <span className="text-primary"> Web Development</span>,
          <span className="text-primary"> Games</span> &
          <span className="text-primary"> Design</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#portfolio"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-all duration-300 font-medium"
          >
            View Our Work
          </Link>
          <Link
            href="#contact"
            className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="mb-2 text-sm">Learn More</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
