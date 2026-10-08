'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Portal3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 450;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

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

    const cyanPoint = new THREE.PointLight(0x22d3ee, 5, 25);
    cyanPoint.position.set(0, 0, 4);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0xa855f7, 4, 25);
    purplePoint.position.set(0, 0, -3);
    scene.add(purplePoint);

    const portalGroup = new THREE.Group();
    scene.add(portalGroup);

    // 1. Heavy Outer Portal Arch / Stargate Ring
    const outerRingGeom = new THREE.TorusGeometry(3.6, 0.45, 24, 64);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0x070d18,
      metalness: 0.95,
      roughness: 0.2,
    });
    const outerRing = new THREE.Mesh(outerRingGeom, outerRingMat);
    portalGroup.add(outerRing);

    // 2. Middle Glowing Runic Energy Ring
    const runicRingGeom = new THREE.TorusGeometry(3.2, 0.1, 16, 64);
    const runicRingMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.9,
    });
    const runicRing = new THREE.Mesh(runicRingGeom, runicRingMat);
    portalGroup.add(runicRing);

    // 3. Inner Event Horizon Disc / Energy Vortex
    const vortexGeom = new THREE.CircleGeometry(2.9, 48);
    const vortexMat = new THREE.MeshBasicMaterial({
      color: 0x0c4a6e,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
    });
    const vortex = new THREE.Mesh(vortexGeom, vortexMat);
    portalGroup.add(vortex);

    // 4. Central Floating AVENIQ Delta Emblem
    const emblemGeom = new THREE.TetrahedronGeometry(1.1, 0);
    const emblemMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
    });
    const emblem = new THREE.Mesh(emblemGeom, emblemMat);
    portalGroup.add(emblem);

    // 5. Vortex Warp Particle Stream
    const streamCount = 180;
    const streamGeom = new THREE.BufferGeometry();
    const streamPositions = new Float32Array(streamCount * 3);
    const streamSpeeds: number[] = [];

    for (let i = 0; i < streamCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 2.6;
      streamPositions[i * 3] = Math.cos(angle) * r;
      streamPositions[i * 3 + 1] = Math.sin(angle) * r;
      streamPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      streamSpeeds.push(Math.random() * 0.06 + 0.02);
    }

    streamGeom.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));
    const streamMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.14,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleStream = new THREE.Points(streamGeom, streamMat);
    portalGroup.add(particleStream);

    // Mouse Parallax
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
        portalGroup.rotation.y = elapsed * 0.1 + mouseX * 0.25;
        portalGroup.rotation.x = mouseY * 0.15;

        outerRing.rotation.z = -elapsed * 0.15;
        runicRing.rotation.z = elapsed * 0.4;
        emblem.rotation.y = elapsed * 0.8;
        emblem.rotation.x = Math.sin(elapsed) * 0.3;

        // Animate vortex particles moving forward towards user
        const posAttr = streamGeom.getAttribute('position') as THREE.BufferAttribute;
        for (let i = 0; i < streamCount; i++) {
          let z = posAttr.getZ(i);
          z += streamSpeeds[i];
          if (z > 4) z = -3;
          posAttr.setZ(i, z);
        }
        posAttr.needsUpdate = true;
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

  return <div ref={mountRef} className="w-full h-80 sm:h-[420px] relative overflow-hidden" />;
}
