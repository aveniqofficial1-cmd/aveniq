'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  className?: string;
  onCardHover?: (cardName: string | null) => void;
}

export default function AveniqCoreCanvas({ className = '', onCardHover }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 540;
    const height = container.clientHeight || 540;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 15);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. Cinematic Multi-Point Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1128, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    keyLight.position.set(6, 8, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xa855f7, 3.0);
    fillLight.position.set(-8, -6, 6);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x22d3ee, 5.0, 25);
    rimLight.position.set(0, 0, -5);
    scene.add(rimLight);

    const coreLight = new THREE.PointLight(0x38bdf8, 6.0, 15);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // 4. AVENIQ Central Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // A. Outer Double-Layer Refractive Glass Sphere
    const outerGlassGeom = new THREE.SphereGeometry(3.3, 64, 64);
    const outerGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      transparent: true,
      opacity: 0.4,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const outerSphere = new THREE.Mesh(outerGlassGeom, outerGlassMat);
    coreGroup.add(outerSphere);

    // B. Inner Geodesic Lattice Wireframe
    const latticeGeom = new THREE.IcosahedronGeometry(3.4, 2);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const latticeSphere = new THREE.Mesh(latticeGeom, latticeMat);
    coreGroup.add(latticeSphere);

    // C. Articulated Equatorial Tech Ring with engraved notches
    const equatorRingGeom = new THREE.TorusGeometry(3.5, 0.08, 16, 100);
    const equatorRingMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
    });
    const equatorRing = new THREE.Mesh(equatorRingGeom, equatorRingMat);
    equatorRing.rotation.x = Math.PI / 2;
    coreGroup.add(equatorRing);

    // D. Beveled Metallic AVENIQ Signature Delta 'A' Monolith Emblem
    const emblemGroup = new THREE.Group();

    // Central Triangular Delta Monolith
    const deltaGeom = new THREE.ConeGeometry(1.6, 2.4, 3, 1);
    const deltaMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.15,
    });
    const deltaMesh = new THREE.Mesh(deltaGeom, deltaMat);
    deltaMesh.rotation.y = Math.PI;
    emblemGroup.add(deltaMesh);

    // Inner Glowing Quantum Energy Diamond
    const quantumCoreGeom = new THREE.OctahedronGeometry(0.7, 0);
    const quantumCoreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.8,
    });
    const quantumCore = new THREE.Mesh(quantumCoreGeom, quantumCoreMat);
    emblemGroup.add(quantumCore);

    coreGroup.add(emblemGroup);

    // E. 3 Concentric Gyroscopic Articulated Rings with Optical Ticks
    const gyroGroup = new THREE.Group();

    const createGimbalRing = (radius: number, tube: number, colorHex: number, rotX: number, rotY: number) => {
      const gRingGeom = new THREE.TorusGeometry(radius, tube, 20, 120);
      const gRingMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.85,
        metalness: 0.9,
        roughness: 0.25,
      });
      const ringMesh = new THREE.Mesh(gRingGeom, gRingMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;

      // Add mechanical node hubs on each ring
      for (let i = 0; i < 4; i++) {
        const hubGeom = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const hubMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9 });
        const hub = new THREE.Mesh(hubGeom, hubMat);
        const angle = (i / 4) * Math.PI * 2;
        hub.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        ringMesh.add(hub);
      }

      return ringMesh;
    };

    const ring1 = createGimbalRing(4.3, 0.05, 0x38bdf8, Math.PI / 3, Math.PI / 6);
    const ring2 = createGimbalRing(4.8, 0.04, 0xa855f7, -Math.PI / 4, Math.PI / 4);
    const ring3 = createGimbalRing(5.3, 0.035, 0x22d3ee, Math.PI / 2.2, -Math.PI / 5);

    gyroGroup.add(ring1);
    gyroGroup.add(ring2);
    gyroGroup.add(ring3);
    coreGroup.add(gyroGroup);

    // F. Orbiting 3D Glass HUD Mini-Display Cards with LED beacons
    const cardsGroup = new THREE.Group();
    const cardDefs = [
      { name: 'Website', angle: 0, radius: 5.2, y: 1.6, color: 0x38bdf8 },
      { name: 'Web Apps', angle: 1.25, radius: 5.6, y: -1.3, color: 0xa855f7 },
      { name: 'E-Commerce', angle: 2.5, radius: 5.1, y: 1.9, color: 0x22d3ee },
      { name: 'AI Solutions', angle: 3.75, radius: 5.7, y: -0.9, color: 0x3b82f6 },
      { name: 'Custom Solutions', angle: 5.0, radius: 5.3, y: 1.1, color: 0xc084fc },
    ];

    const cardMeshes: { mesh: THREE.Group; name: string; baseAngle: number; radius: number; y: number }[] = [];

    cardDefs.forEach((item) => {
      const cardContainer = new THREE.Group();

      // Frosted Glass Screen Panel
      const paneGeom = new THREE.BoxGeometry(1.4, 0.85, 0.05);
      const paneMat = new THREE.MeshPhysicalMaterial({
        color: 0x0c162c,
        transparent: true,
        opacity: 0.85,
        roughness: 0.1,
        metalness: 0.8,
        clearcoat: 0.8,
      });
      const paneMesh = new THREE.Mesh(paneGeom, paneMat);
      cardContainer.add(paneMesh);

      // Glowing Neon Border Edge
      const edges = new THREE.EdgesGeometry(paneGeom);
      const border = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: item.color, transparent: true, opacity: 0.85 })
      );
      cardContainer.add(border);

      // Status LED Dot
      const ledGeom = new THREE.CircleGeometry(0.06, 12);
      const ledMat = new THREE.MeshBasicMaterial({ color: item.color });
      const led = new THREE.Mesh(ledGeom, ledMat);
      led.position.set(-0.5, 0.28, 0.04);
      cardContainer.add(led);

      // Micro Mini-Chart Lines
      const lineGeom = new THREE.PlaneGeometry(0.8, 0.04);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const line1 = new THREE.Mesh(lineGeom, lineMat);
      line1.position.set(0.1, 0.28, 0.04);
      cardContainer.add(line1);

      const line2 = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.04), lineMat);
      line2.position.set(0, 0.08, 0.04);
      cardContainer.add(line2);

      const line3 = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.04), lineMat);
      line3.position.set(-0.2, -0.12, 0.04);
      cardContainer.add(line3);

      cardsGroup.add(cardContainer);
      cardMeshes.push({
        mesh: cardContainer,
        name: item.name,
        baseAngle: item.angle,
        radius: item.radius,
        y: item.y,
      });
    });

    coreGroup.add(cardsGroup);

    // G. Core Surrounding Particle Cloud
    const pCount = 300;
    const pGeom = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);

    const cBlue = new THREE.Color(0x38bdf8);
    const cPurple = new THREE.Color(0xa855f7);

    for (let i = 0; i < pCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.8 + Math.random() * 2.5;

      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);

      const col = Math.random() > 0.5 ? cBlue : cPurple;
      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }

    pGeom.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeom.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(pGeom, pMat);
    coreGroup.add(particleCloud);

    // 5. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = -y * 2;
    };

    container.addEventListener('pointermove', handlePointerMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // 6. High-Precision 60fps Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      targetRotY += (mouseX * 0.5 - targetRotY) * 0.05;
      targetRotX += (mouseY * 0.35 - targetRotX) * 0.05;

      if (!prefersReducedMotion) {
        // Core group smooth rotation + cursor drift
        coreGroup.rotation.y = elapsedTime * 0.2 + targetRotY;
        coreGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.08 + targetRotX;

        // Inner delta counter-rotation & pulsing
        emblemGroup.rotation.y = -elapsedTime * 0.35;
        quantumCore.rotation.z = elapsedTime * 0.6;
        deltaMesh.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.04);

        // Gimbal rings independent mechanical rotation
        ring1.rotation.z += 0.006;
        ring2.rotation.z -= 0.008;
        ring3.rotation.z += 0.005;

        // Orbiting HUD cards always face camera
        cardMeshes.forEach((item, idx) => {
          const currentAngle = item.baseAngle + elapsedTime * 0.18;
          item.mesh.position.x = Math.cos(currentAngle) * item.radius;
          item.mesh.position.z = Math.sin(currentAngle) * item.radius;
          item.mesh.position.y = item.y + Math.sin(elapsedTime * 1.5 + idx) * 0.25;
          item.mesh.lookAt(camera.position);
        });

        particleCloud.rotation.y = -elapsedTime * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerGlassGeom.dispose();
      outerGlassMat.dispose();
      deltaGeom.dispose();
      deltaMat.dispose();
      pGeom.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, [onCardHover]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/25 blur-3xl opacity-75 animate-cyber-pulse" />
      </div>
    </div>
  );
}
