'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  stepIndex: number; // 0: Discover, 1: Plan, 2: Build, 3: Launch
}

export default function Process3D({ stepIndex }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    let isVisible = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationFrameId: number;
    let objGroup: THREE.Group | null = null;
    let dynamicSubmesh: THREE.Mesh | null = null;
    const startTime = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initScene = () => {
      if (renderer) return;

      const width = container.clientWidth || 220;
      const height = container.clientHeight || 180;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 7.5);

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

      const cyanPoint = new THREE.PointLight(0x38bdf8, 3.5, 15);
      cyanPoint.position.set(2, 3, 4);
      scene.add(cyanPoint);

      const purplePoint = new THREE.PointLight(0xa855f7, 3.0, 15);
      purplePoint.position.set(-2, -2, 3);
      scene.add(purplePoint);

      // Base Floating Cyber Pedestal
      const baseGroup = new THREE.Group();
      scene.add(baseGroup);

      const platGeom = new THREE.CylinderGeometry(1.8, 2.0, 0.25, 24);
      const platMat = new THREE.MeshStandardMaterial({
        color: 0x0a101f,
        roughness: 0.3,
        metalness: 0.85,
      });
      const platform = new THREE.Mesh(platGeom, platMat);
      platform.position.y = -1.6;
      baseGroup.add(platform);

      const ringGeom = new THREE.TorusGeometry(1.9, 0.03, 16, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.45;
      baseGroup.add(ring);

      // Main Process Object Group
      const newObjGroup = new THREE.Group();
      scene.add(newObjGroup);
      objGroup = newObjGroup;

      if (stepIndex === 0) {
        // 01. Discover: Precision Optical Holographic LiDAR Scanner
        const sensorBody = new THREE.Mesh(
          new THREE.CylinderGeometry(0.7, 0.8, 0.8, 24),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 })
        );
        sensorBody.position.y = -0.3;
        newObjGroup.add(sensorBody);

        // Brass focus ring
        const focusRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.78, 0.05, 12, 32),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.1 })
        );
        focusRing.rotation.x = Math.PI / 2;
        focusRing.position.y = -0.1;
        newObjGroup.add(focusRing);

        // Holographic Optical Glass Dome
        const dome = new THREE.Mesh(
          new THREE.SphereGeometry(0.65, 24, 24),
          new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45, roughness: 0.05, transmission: 0.85 })
        );
        dome.position.y = 0.5;
        newObjGroup.add(dome);

        // Rotating LiDAR Scan Ring
        const scanRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.9, 0.03, 12, 32),
          new THREE.MeshBasicMaterial({ color: 0x22d3ee })
        );
        scanRing.position.y = 0.5;
        newObjGroup.add(scanRing);
        dynamicSubmesh = scanRing;

      } else if (stepIndex === 1) {
        // 02. Plan: 3D Architectural Blueprint Drafting Table & Grid
        const board = new THREE.Mesh(
          new THREE.BoxGeometry(2.2, 0.1, 1.8),
          new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.7, roughness: 0.3 })
        );
        board.rotation.x = 0.3;
        newObjGroup.add(board);

        // Isometric Blueprint Grid Wireframe
        const gridLines = new THREE.Mesh(
          new THREE.BoxGeometry(2.0, 0.02, 1.6),
          new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true })
        );
        gridLines.rotation.x = 0.3;
        gridLines.position.y = 0.06;
        newObjGroup.add(gridLines);

        // 3D Extruded Planning Milestone Blocks
        [-0.5, 0.5].forEach((x, i) => {
          const b = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.4 + i * 0.3, 0.4),
            new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.6 })
          );
          b.position.set(x, 0.3 + i * 0.15, -0.2);
          newObjGroup.add(b);
        });

      } else if (stepIndex === 2) {
        // 03. Build: Automated 3D Robotic Compiler Rig with Articulated Modules
        [-0.5, 0.5].forEach((x) => {
          [-0.4, 0.4].forEach((y) => {
            const block = new THREE.Mesh(
              new THREE.BoxGeometry(0.65, 0.65, 0.65),
              new THREE.MeshStandardMaterial({
                color: (x + y) === 0 ? 0x38bdf8 : 0x8b5cf6,
                emissive: 0x1d4ed8,
                emissiveIntensity: 0.45,
                metalness: 0.85,
                roughness: 0.2,
              })
            );
            block.position.set(x, y + 0.1, 0);

            const wire = new THREE.LineSegments(
              new THREE.EdgesGeometry(new THREE.BoxGeometry(0.65, 0.65, 0.65)),
              new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 })
            );
            block.add(wire);
            newObjGroup.add(block);
          });
        });

      } else {
        // 04. Launch: Metallic Cyber Aerospace Rocket & Ion Exhaust Plume
        // Rocket Fuselage
        const rocketBody = new THREE.Mesh(
          new THREE.CylinderGeometry(0.45, 0.5, 1.4, 20),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.95, roughness: 0.15 })
        );
        rocketBody.position.y = 0.1;
        newObjGroup.add(rocketBody);

        // Nose Cone
        const noseCone = new THREE.Mesh(
          new THREE.ConeGeometry(0.45, 0.9, 20),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7, metalness: 0.9 })
        );
        noseCone.position.y = 1.25;
        newObjGroup.add(noseCone);

        // Stabilizer Fins
        for (let i = 0; i < 4; i++) {
          const fin = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 0.5, 0.4),
            new THREE.MeshStandardMaterial({ color: 0xa855f7, metalness: 0.8 })
          );
          const angle = (i / 4) * Math.PI * 2;
          fin.position.set(Math.cos(angle) * 0.45, -0.4, Math.sin(angle) * 0.45);
          newObjGroup.add(fin);
        }

        // Volumetric Ion Exhaust Plume
        const exhaust = new THREE.Mesh(
          new THREE.ConeGeometry(0.35, 1.1, 16),
          new THREE.MeshBasicMaterial({ color: 0xf59e0b })
        );
        exhaust.rotation.x = Math.PI;
        exhaust.position.y = -1.0;
        newObjGroup.add(exhaust);
      }

      animate();
    };

    const animate = () => {
      if (!isVisible || !renderer || !scene || !camera) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) / 1000;

      if (!prefersReducedMotion && objGroup) {
        objGroup.rotation.y = elapsed * 0.6;
        objGroup.position.y = Math.sin(elapsed * 2 + stepIndex) * 0.12;

        if (dynamicSubmesh) {
          dynamicSubmesh.rotation.x = elapsed * 1.5;
          dynamicSubmesh.rotation.z = elapsed * 1.0;
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
      objGroup = null;
      dynamicSubmesh = null;
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
  }, [stepIndex]);

  return <div ref={mountRef} className="w-full h-36 sm:h-44 relative overflow-hidden" />;
}
