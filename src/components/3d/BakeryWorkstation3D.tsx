'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BakeryWorkstation3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    let isVisible = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationFrameId: number;
    let workstationGroup: THREE.Group | null = null;
    let pastryMesh: THREE.Mesh | null = null;
    let mouseX = 0;
    let mouseY = 0;
    const startTime = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initScene = () => {
      if (renderer) return;

      const width = container.clientWidth || 450;
      const height = container.clientHeight || 320;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0.4, 8.0);

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

      const cyanDir = new THREE.DirectionalLight(0x38bdf8, 3.5);
      cyanDir.position.set(4, 5, 5);
      scene.add(cyanDir);

      const warmFill = new THREE.PointLight(0xf59e0b, 3.0, 15);
      warmFill.position.set(-4, -1, 4);
      scene.add(warmFill);

      const newWorkstationGroup = new THREE.Group();
      scene.add(newWorkstationGroup);
      workstationGroup = newWorkstationGroup;

      // 1. Center Realistic Studio Display Monitor
      // Aluminum Chassis
      const monitorFrameGeom = new THREE.BoxGeometry(4.4, 2.7, 0.12);
      const alumMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.2,
        metalness: 0.9,
      });
      const monitorFrame = new THREE.Mesh(monitorFrameGeom, alumMat);
      newWorkstationGroup.add(monitorFrame);

      // Aluminum Stand & Base
      const standPole = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.4, 0.1), alumMat);
      standPole.position.set(0, -1.4, -0.4);
      standPole.rotation.x = -0.2;
      newWorkstationGroup.add(standPole);

      const standFoot = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.4), alumMat);
      standFoot.position.set(0, -2.0, 0);
      newWorkstationGroup.add(standFoot);

      // Glass Screen Surface
      const screenGeom = new THREE.PlaneGeometry(4.2, 2.5);
      const screenMat = new THREE.MeshBasicMaterial({ color: 0x0a0f1d });
      const screen = new THREE.Mesh(screenGeom, screenMat);
      screen.position.z = 0.07;
      monitorFrame.add(screen);

      // Screen Bakery Header Bar
      const navBar = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 0.28), new THREE.MeshBasicMaterial({ color: 0xd97706 }));
      navBar.position.set(0, 0.98, 0.02);
      screen.add(navBar);

      // Bakery Product Cards (3 artisanal cards with images)
      [-1.3, 0, 1.3].forEach((x, i) => {
        const cardGeom = new THREE.PlaneGeometry(1.15, 1.3);
        const cardMat = new THREE.MeshBasicMaterial({
          color: i === 1 ? 0xf59e0b : 0x0284c7,
          transparent: true,
          opacity: 0.55,
        });
        const card = new THREE.Mesh(cardGeom, cardMat);
        card.position.set(x, 0.05, 0.02);
        screen.add(card);

        // Cart button inside card
        const btn = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.18), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 }));
        btn.position.set(0, -0.45, 0.01);
        card.add(btn);
      });

      // 2. Flanking Left & Right Satellite Displays (Angled)
      const sideFrameGeom = new THREE.BoxGeometry(1.4, 2.2, 0.08);
      const leftDisplay = new THREE.Mesh(sideFrameGeom, alumMat);
      leftDisplay.position.set(-2.9, 0.2, 0.7);
      leftDisplay.rotation.y = 0.55;
      newWorkstationGroup.add(leftDisplay);

      const rightDisplay = new THREE.Mesh(sideFrameGeom, alumMat);
      rightDisplay.position.set(2.9, 0.2, 0.7);
      rightDisplay.rotation.y = -0.55;
      newWorkstationGroup.add(rightDisplay);

      // 3. Floating 3D Golden Croissant / Artisanal Bakes Model
      const pastryGeom = new THREE.TorusGeometry(0.55, 0.22, 16, 36, Math.PI * 1.3);
      const pastryMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.8,
        roughness: 0.3,
        metalness: 0.2,
      });
      const pastry = new THREE.Mesh(pastryGeom, pastryMat);
      pastry.position.set(0, 0.2, 0.8);
      newWorkstationGroup.add(pastry);
      pastryMesh = pastry;

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

      if (!prefersReducedMotion && workstationGroup) {
        workstationGroup.rotation.y = mouseX * 0.25 + Math.sin(elapsed * 0.5) * 0.05;
        workstationGroup.rotation.x = mouseY * 0.15;
        if (pastryMesh) {
          pastryMesh.rotation.z = elapsed * 0.7;
          pastryMesh.rotation.y = elapsed * 0.4;
        }
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
      workstationGroup = null;
      pastryMesh = null;
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
  }, []);

  return <div ref={mountRef} className="w-full h-72 sm:h-84 relative overflow-hidden" />;
}
