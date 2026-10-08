'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlobalBackgroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Starfield Particle System 1 (Distant Stars)
    const starCount = 800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const color1 = new THREE.Color('#38bdf8');
    const color2 = new THREE.Color('#a855f7');
    const color3 = new THREE.Color('#ffffff');

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 160;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? color1 : rand > 0.3 ? color2 : color3;
      starColors[i * 3] = chosenColor.r;
      starColors[i * 3 + 1] = chosenColor.g;
      starColors[i * 3 + 2] = chosenColor.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Floating Cosmic Dust Particles 2 (Foreground subtle drift)
    const dustCount = 180;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustScales = new Float32Array(dustCount);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 90;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 + 10;
      dustScales[i] = Math.random() * 0.8 + 0.3;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 1.2,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const dustField = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustField);

    // Subtle 3D Geometric Debris / Space Fragments
    const fragmentsGroup = new THREE.Group();
    const fragmentGeom = new THREE.OctahedronGeometry(0.5, 0);
    const fragmentMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    for (let i = 0; i < 15; i++) {
      const mesh = new THREE.Mesh(fragmentGeom, fragmentMat);
      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 30
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.scale.setScalar(Math.random() * 1.5 + 0.5);
      fragmentsGroup.add(mesh);
    }
    scene.add(fragmentsGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      if (!prefersReducedMotion) {
        starField.rotation.y = elapsedTime * 0.02 + targetX * 0.08;
        starField.rotation.x = elapsedTime * 0.01 + targetY * 0.05;

        dustField.rotation.y = -elapsedTime * 0.015 + targetX * 0.05;
        dustField.position.y = Math.sin(elapsedTime * 0.3) * 1.5;

        fragmentsGroup.rotation.y = elapsedTime * 0.03;
        fragmentsGroup.rotation.x = elapsedTime * 0.02;
        fragmentsGroup.children.forEach((child, idx) => {
          child.rotation.y += 0.01 * (idx % 2 === 0 ? 1 : -1);
          child.rotation.x += 0.008;
        });

        camera.position.x = targetX * 3;
        camera.position.y = targetY * 2;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      fragmentGeom.dispose();
      fragmentMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
