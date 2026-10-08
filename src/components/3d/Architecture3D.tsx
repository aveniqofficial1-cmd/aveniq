'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  activeMode: 'static' | 'dynamic';
}

export default function Architecture3D({ activeMode }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const activeModeRef = useRef(activeMode);
  activeModeRef.current = activeMode;

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    let isVisible = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationFrameId: number;
    let staticGroup: THREE.Group | null = null;
    let dynamicGroup: THREE.Group | null = null;
    let packets: { mesh: THREE.Mesh; progress: number; isDynamic: boolean }[] = [];
    const startTime = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initScene = () => {
      if (renderer) return;

      const width = container.clientWidth || 400;
      const height = container.clientHeight || 300;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 9.5);

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

      const ambient = new THREE.AmbientLight(0xffffff, 1.3);
      scene.add(ambient);

      const cyanLight = new THREE.PointLight(0x22d3ee, 4.5, 25);
      cyanLight.position.set(-4, 3, 5);
      scene.add(cyanLight);

      const purpleLight = new THREE.PointLight(0xa855f7, 4.5, 25);
      purpleLight.position.set(4, 3, 5);
      scene.add(purpleLight);

      // 1. STATIC ARCHITECTURE: Realistic 3D Edge CDN Server Tower
      const newStaticGroup = new THREE.Group();
      scene.add(newStaticGroup);
      staticGroup = newStaticGroup;

      // Base Server Blade Rack
      const cdnChassis = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.4, 2.0),
        new THREE.MeshStandardMaterial({
          color: 0x091224,
          metalness: 0.9,
          roughness: 0.2,
          emissive: 0x0284c7,
          emissiveIntensity: 0.4,
        })
      );
      cdnChassis.position.set(-2.5, -1.2, 0);
      newStaticGroup.add(cdnChassis);

      // 3 Frosted Pre-Rendered Cache Wafers (HTML, CSS, JS)
      const waferColors = [0x38bdf8, 0x60a5fa, 0x22d3ee];
      waferColors.forEach((col, idx) => {
        const wafer = new THREE.Mesh(
          new THREE.CylinderGeometry(0.85, 0.85, 0.14, 32),
          new THREE.MeshPhysicalMaterial({
            color: col,
            emissive: col,
            emissiveIntensity: 0.5,
            metalness: 0.8,
            roughness: 0.1,
            transparent: true,
            opacity: 0.85,
          })
        );
        wafer.position.set(-2.5, -0.6 + idx * 0.45, 0);
        newStaticGroup.add(wafer);
      });

      // Global Edge CDN Orbit Ring
      const globeMesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.7, 1),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true })
      );
      globeMesh.position.set(-2.5, 1.2, 0);
      newStaticGroup.add(globeMesh);

      // 2. DYNAMIC ARCHITECTURE: Multi-Tier Database & Server Cluster
      const newDynamicGroup = new THREE.Group();
      scene.add(newDynamicGroup);
      dynamicGroup = newDynamicGroup;

      // Stacked Realtime Database Cylinders
      [-0.8, 0, 0.8].forEach((yOffset) => {
        const dbLayer = new THREE.Mesh(
          new THREE.CylinderGeometry(0.75, 0.75, 0.32, 28),
          new THREE.MeshStandardMaterial({
            color: 0x581c87,
            emissive: 0x7e22ce,
            emissiveIntensity: 0.7,
            metalness: 0.85,
            roughness: 0.2,
          })
        );
        dbLayer.position.set(2.5, -0.5 + yOffset * 0.45, 0);
        newDynamicGroup.add(dbLayer);

        // LED ring separator
        const dbRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.78, 0.02, 12, 32),
          new THREE.MeshBasicMaterial({ color: 0xc084fc })
        );
        dbRing.rotation.x = Math.PI / 2;
        dbRing.position.set(2.5, -0.5 + yOffset * 0.45, 0);
        newDynamicGroup.add(dbRing);
      });

      // Microservice Compute Node (Processor with Cooling Fins)
      const cpuNode = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.2, 1.2),
        new THREE.MeshStandardMaterial({
          color: 0x1e1b4b,
          emissive: 0x4338ca,
          emissiveIntensity: 0.6,
          metalness: 0.9,
          roughness: 0.15,
        })
      );
      cpuNode.position.set(2.5, 1.2, 0);
      newDynamicGroup.add(cpuNode);

      // 3. Glowing Interconnecting Data Packets
      const packetCount = 20;
      const packetGeom = new THREE.SphereGeometry(0.08, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      packets = [];

      for (let i = 0; i < packetCount; i++) {
        const pMesh = new THREE.Mesh(packetGeom, packetMat);
        scene.add(pMesh);
        packets.push({
          mesh: pMesh,
          progress: Math.random(),
          isDynamic: i % 2 === 0,
        });
      }

      animate();
    };

    const animate = () => {
      if (!isVisible || !renderer || !scene || !camera) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) / 1000;
      const currentMode = activeModeRef.current;

      // Smooth camera interpolation based on selected mode
      const targetCamX = currentMode === 'static' ? -0.8 : 0.8;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;

      if (!prefersReducedMotion && staticGroup && dynamicGroup) {
        staticGroup.rotation.y = elapsed * 0.3;
        dynamicGroup.rotation.y = -elapsed * 0.3;

        if (currentMode === 'static') {
          staticGroup.scale.setScalar(1.08);
          dynamicGroup.scale.setScalar(0.92);
        } else {
          staticGroup.scale.setScalar(0.92);
          dynamicGroup.scale.setScalar(1.08);
        }

        packets.forEach((p) => {
          p.progress = (p.progress + 0.015) % 1;
          if (p.isDynamic) {
            p.mesh.position.set(
              2.5 + Math.sin(p.progress * Math.PI * 2) * 0.8,
              -1.0 + p.progress * 2.5,
              Math.cos(p.progress * Math.PI * 2) * 0.8
            );
          } else {
            p.mesh.position.set(
              -2.5,
              -1.2 + p.progress * 2.6,
              Math.sin(p.progress * Math.PI * 4) * 0.3
            );
          }
        });
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
      staticGroup = null;
      dynamicGroup = null;
      packets = [];
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
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-72 sm:h-80 relative overflow-hidden" />;
}
