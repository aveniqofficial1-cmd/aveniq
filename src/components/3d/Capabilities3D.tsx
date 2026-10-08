'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Capabilities3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 360;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const cyanPoint = new THREE.PointLight(0x22d3ee, 4, 20);
    cyanPoint.position.set(3, 4, 5);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 3, 20);
    purplePoint.position.set(-3, -3, 4);
    scene.add(purplePoint);

    const pyramidGroup = new THREE.Group();
    scene.add(pyramidGroup);

    // Layered Stepped Glass Pyramid Slabs (4 Levels)
    const levels = [
      { size: 3.2, y: -1.2, color: 0x0c1a30 },
      { size: 2.5, y: -0.6, color: 0x0e2445 },
      { size: 1.8, y: 0.0, color: 0x11315e },
      { size: 1.1, y: 0.6, color: 0x174684 },
    ];

    levels.forEach((lvl) => {
      const slabGeom = new THREE.BoxGeometry(lvl.size, 0.35, lvl.size);
      const slabMat = new THREE.MeshPhysicalMaterial({
        color: lvl.color,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85,
      });
      const slab = new THREE.Mesh(slabGeom, slabMat);
      slab.position.y = lvl.y;
      pyramidGroup.add(slab);

      // Glowing edges
      const edges = new THREE.EdgesGeometry(slabGeom);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 })
      );
      slab.add(line);
    });

    // Apex Glowing Hologram Diamond
    const apexGeom = new THREE.OctahedronGeometry(0.7, 0);
    const apexMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
    });
    const apex = new THREE.Mesh(apexGeom, apexMat);
    apex.position.y = 1.6;
    pyramidGroup.add(apex);

    // Orbiting Floating Hologram Badges
    const badgeCount = 6;
    const badgeMeshes: { mesh: THREE.Mesh; angle: number; radius: number; y: number }[] = [];

    for (let i = 0; i < badgeCount; i++) {
      const bGeom = new THREE.BoxGeometry(0.45, 0.45, 0.08);
      const bMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true });
      const bMesh = new THREE.Mesh(bGeom, bMat);
      pyramidGroup.add(bMesh);

      badgeMeshes.push({
        mesh: bMesh,
        angle: (i / badgeCount) * Math.PI * 2,
        radius: 2.8,
        y: -0.5 + (i % 3) * 0.7,
      });
    }

    // Mouse tilt
    let mouseX = 0;
    let mouseY = 0;
    const handlePointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener('pointermove', handlePointer);

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) / 1000;

      if (!prefersReducedMotion) {
        pyramidGroup.rotation.y = elapsed * 0.25 + mouseX * 0.3;
        pyramidGroup.rotation.x = 0.1 + mouseY * 0.2;

        apex.rotation.y = -elapsed * 0.8;
        apex.position.y = 1.6 + Math.sin(elapsed * 2) * 0.1;

        badgeMeshes.forEach((item, idx) => {
          const currentAngle = item.angle + elapsed * 0.3;
          item.mesh.position.x = Math.cos(currentAngle) * item.radius;
          item.mesh.position.z = Math.sin(currentAngle) * item.radius;
          item.mesh.position.y = item.y + Math.sin(elapsed * 2 + idx) * 0.15;
          item.mesh.rotation.y += 0.02;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-80 sm:h-96 relative overflow-hidden" />;
}
