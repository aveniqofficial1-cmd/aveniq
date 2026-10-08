'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  onSelectTech?: (techName: string) => void;
}

export default function TechConstellation3D({ onSelectTech }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    let isVisible = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationFrameId: number;
    let mainGroup: THREE.Group | null = null;
    let coreMesh: THREE.Mesh | null = null;
    let techMeshes: { mesh: THREE.Group; name: string; angle: number; radius: number; y: number }[] = [];
    let mouseX = 0;
    let mouseY = 0;
    const startTime = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initScene = () => {
      if (renderer) return;

      const width = container.clientWidth || 500;
      const height = container.clientHeight || 360;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 11);

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: 'default',
        });
      } catch (e) {
        console.warn('WebGL init error:', e);
        return;
      }

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const ambient = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambient);

      const cyanPoint = new THREE.PointLight(0x38bdf8, 4.0, 20);
      cyanPoint.position.set(4, 4, 6);
      scene.add(cyanPoint);

      const purplePoint = new THREE.PointLight(0xa855f7, 3.5, 20);
      purplePoint.position.set(-4, -4, 5);
      scene.add(purplePoint);

      const newMainGroup = new THREE.Group();
      scene.add(newMainGroup);
      mainGroup = newMainGroup;

      // 1. Central Realistic Quantum Tech Reactor Core
      const coreGeom = new THREE.CylinderGeometry(1.4, 1.6, 0.45, 32);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x0a1020,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0x0284c7,
        emissiveIntensity: 0.5,
      });
      const newCoreMesh = new THREE.Mesh(coreGeom, coreMat);
      newMainGroup.add(newCoreMesh);
      coreMesh = newCoreMesh;

      // Magnetic Confinement Ring
      const coreRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.05, 16, 64),
        new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0284c7, emissiveIntensity: 0.8 })
      );
      coreRing.rotation.x = Math.PI / 2;
      newMainGroup.add(coreRing);

      // 2. Realistic 3D Orbiting Technology Emblems
      const techList = [
        { name: 'React', color: 0x38bdf8, angle: 0, radius: 3.5, y: 0.8, type: 'atom' },
        { name: 'Next.js', color: 0xffffff, angle: 0.65, radius: 3.9, y: -0.6, type: 'monolith' },
        { name: 'TypeScript', color: 0x60a5fa, angle: 1.3, radius: 3.3, y: 1.0, type: 'cube' },
        { name: 'Tailwind CSS', color: 0x22d3ee, angle: 1.95, radius: 3.7, y: -0.9, type: 'wave' },
        { name: 'Node.js', color: 0x22c55e, angle: 2.6, radius: 3.4, y: 0.7, type: 'hex' },
        { name: 'PostgreSQL', color: 0x3b82f6, angle: 3.25, radius: 3.8, y: -0.5, type: 'db' },
        { name: 'Supabase', color: 0x34d399, angle: 3.9, radius: 3.5, y: 0.9, type: 'bolt' },
        { name: 'Vercel', color: 0xffffff, angle: 4.55, radius: 3.9, y: -0.8, type: 'triangle' },
        { name: 'AI APIs', color: 0xa855f7, angle: 5.2, radius: 3.6, y: 0.6, type: 'synapse' },
        { name: 'Git', color: 0xf97316, angle: 5.85, radius: 3.7, y: -0.4, type: 'branch' },
      ];

      techMeshes = [];

      techList.forEach((t) => {
        const nodeContainer = new THREE.Group();

        if (t.type === 'atom') {
          // React: Nucleus + 2 orbital rings
          const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshBasicMaterial({ color: t.color }));
          nodeContainer.add(nucleus);
          const r1 = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.02, 8, 24), new THREE.MeshBasicMaterial({ color: t.color }));
          r1.rotation.x = Math.PI / 3;
          nodeContainer.add(r1);
          const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.02, 8, 24), new THREE.MeshBasicMaterial({ color: t.color }));
          r2.rotation.y = Math.PI / 3;
          nodeContainer.add(r2);
        } else if (t.type === 'triangle') {
          // Vercel: Sleek triangle cone
          const cone = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 3), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x38bdf8, emissiveIntensity: 0.8 }));
          nodeContainer.add(cone);
        } else if (t.type === 'db') {
          // Postgres: 3 stacked discs
          [-0.15, 0, 0.15].forEach((dy) => {
            const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.08, 16), new THREE.MeshStandardMaterial({ color: t.color, metalness: 0.8 }));
            disc.position.y = dy;
            nodeContainer.add(disc);
          });
        } else {
          // Beveled Sapphire Tech Cube
          const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.42, 0.42, 0.42),
            new THREE.MeshStandardMaterial({
              color: t.color,
              emissive: t.color,
              emissiveIntensity: 0.6,
              metalness: 0.85,
              roughness: 0.2,
            })
          );
          nodeContainer.add(cube);
        }

        newMainGroup.add(nodeContainer);

        techMeshes.push({
          mesh: nodeContainer,
          name: t.name,
          angle: t.angle,
          radius: t.radius,
          y: t.y,
        });
      });

      // Orbital Laser Rings
      const orbitRing1 = new THREE.Mesh(
        new THREE.RingGeometry(3.45, 3.48, 64),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
      );
      orbitRing1.rotation.x = Math.PI / 2.3;
      newMainGroup.add(orbitRing1);

      const orbitRing2 = new THREE.Mesh(
        new THREE.RingGeometry(3.85, 3.88, 64),
        new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
      );
      orbitRing2.rotation.x = Math.PI / 2.1;
      newMainGroup.add(orbitRing2);

      animate();
    };

    const handlePointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener('pointermove', handlePointer);

    const animate = () => {
      if (!isVisible || !renderer || !scene || !camera) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) / 1000;

      if (!prefersReducedMotion && mainGroup && coreMesh) {
        mainGroup.rotation.y = elapsed * 0.2 + mouseX * 0.3;
        mainGroup.rotation.x = 0.2 + mouseY * 0.2;

        techMeshes.forEach((item, idx) => {
          const currentAngle = item.angle + elapsed * 0.15;
          item.mesh.position.x = Math.cos(currentAngle) * item.radius;
          item.mesh.position.z = Math.sin(currentAngle) * item.radius;
          item.mesh.position.y = item.y + Math.sin(elapsed * 2 + idx) * 0.15;
          item.mesh.rotation.y += 0.02;
          item.mesh.rotation.x += 0.01;
        });

        coreMesh.rotation.y = -elapsed * 0.3;
      }

      renderer.render(scene, camera);
    };

    const cleanup = () => {
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        renderer = null;
      }
      scene = null;
      camera = null;
      mainGroup = null;
      coreMesh = null;
      techMeshes = [];
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            initScene();
            animate();
          } else {
            isVisible = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      container.removeEventListener('pointermove', handlePointer);
      cleanup();
    };
  }, [onSelectTech]);

  return <div ref={mountRef} className="w-full h-80 sm:h-96 relative overflow-hidden" />;
}
