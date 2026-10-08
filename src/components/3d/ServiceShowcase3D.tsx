'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  serviceId: string;
  isHovered?: boolean;
}

export default function ServiceShowcase3D({ serviceId, isHovered = false }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    let isVisible = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationFrameId: number;
    let modelGroup: THREE.Group | null = null;
    let baseGroup: THREE.Group | null = null;
    let dynamicElements: { [key: string]: any } = {};
    const startTime = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initScene = () => {
      if (renderer) return;

      const width = container.clientWidth || 280;
      const height = container.clientHeight || 200;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 8.5);

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

      // Multi-point lighting for realistic PBR sheen
      const ambient = new THREE.AmbientLight(0xffffff, 1.3);
      scene.add(ambient);

      const blueKey = new THREE.DirectionalLight(0x38bdf8, 3.5);
      blueKey.position.set(4, 5, 6);
      scene.add(blueKey);

      const purpleFill = new THREE.PointLight(0xa855f7, 3.0, 20);
      purpleFill.position.set(-4, -3, 5);
      scene.add(purpleFill);

      const cyanRim = new THREE.PointLight(0x22d3ee, 2.5, 15);
      cyanRim.position.set(0, -2, -3);
      scene.add(cyanRim);

      // Base Floating Cyber Pedestal
      const newBaseGroup = new THREE.Group();
      scene.add(newBaseGroup);
      baseGroup = newBaseGroup;

      const pedestalGeom = new THREE.CylinderGeometry(2.4, 2.7, 0.35, 32);
      const pedestalMat = new THREE.MeshStandardMaterial({
        color: 0x080e1e,
        roughness: 0.25,
        metalness: 0.9,
      });
      const pedestal = new THREE.Mesh(pedestalGeom, pedestalMat);
      pedestal.position.y = -2.2;
      newBaseGroup.add(pedestal);

      const ringGeom = new THREE.TorusGeometry(2.55, 0.04, 16, 48);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -2.0;
      newBaseGroup.add(ring);

      // Main Realistic 3D Model Group
      const newModelGroup = new THREE.Group();
      scene.add(newModelGroup);
      modelGroup = newModelGroup;

      if (serviceId === 'website-development') {
        // 1. Realistic Floating Laptop & Multi-Layer Web Workspace
        // Laptop Base with Keyboard & Trackpad
        const basePlateGeom = new THREE.BoxGeometry(3.6, 0.12, 2.4);
        const titaniumMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.85,
          roughness: 0.2,
        });
        const laptopBase = new THREE.Mesh(basePlateGeom, titaniumMat);
        laptopBase.position.set(0, -1.0, 0.8);
        laptopBase.rotation.x = 0.15;
        newModelGroup.add(laptopBase);

        // Keyboard recess
        const kbGeom = new THREE.PlaneGeometry(3.0, 1.2);
        const kbMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
        const kb = new THREE.Mesh(kbGeom, kbMat);
        kb.rotation.x = -Math.PI / 2 + 0.15;
        kb.position.set(0, -0.93, 0.6);
        newModelGroup.add(kb);

        // Trackpad
        const tpGeom = new THREE.PlaneGeometry(1.0, 0.6);
        const tpMat = new THREE.MeshBasicMaterial({ color: 0x334155 });
        const tp = new THREE.Mesh(tpGeom, tpMat);
        tp.rotation.x = -Math.PI / 2 + 0.15;
        tp.position.set(0, -0.93, 1.5);
        newModelGroup.add(tp);

        // Laptop Display Screen Frame
        const screenFrameGeom = new THREE.BoxGeometry(3.6, 2.3, 0.1);
        const screenFrame = new THREE.Mesh(screenFrameGeom, titaniumMat);
        screenFrame.position.set(0, 0.3, -0.3);
        screenFrame.rotation.x = -0.15;
        newModelGroup.add(screenFrame);

        // Glass Screen Face with Website UI
        const screenFaceGeom = new THREE.PlaneGeometry(3.4, 2.1);
        const screenFaceMat = new THREE.MeshBasicMaterial({ color: 0x0a1020 });
        const screenFace = new THREE.Mesh(screenFaceGeom, screenFaceMat);
        screenFace.position.set(0, 0, 0.06);
        screenFrame.add(screenFace);

        // UI Header Bar & Window Dots
        const headerBar = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.25), new THREE.MeshBasicMaterial({ color: 0x1e293b }));
        headerBar.position.set(0, 0.85, 0.01);
        screenFace.add(headerBar);

        [-1.3, -1.15, -1.0].forEach((x, i) => {
          const dot = new THREE.Mesh(new THREE.CircleGeometry(0.04, 12), new THREE.MeshBasicMaterial({
            color: i === 0 ? 0xf43f5e : i === 1 ? 0xf59e0b : 0x10b981,
          }));
          dot.position.set(x, 0, 0.01);
          headerBar.add(dot);
        });

        // Layered Floating Hero Banner
        const heroBanner = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.75), new THREE.MeshBasicMaterial({ color: 0x1d4ed8, transparent: true, opacity: 0.7 }));
        heroBanner.position.set(0, 0.2, 0.02);
        screenFace.add(heroBanner);

        // Floating Code Badges (HTML / CSS / JS)
        const badge1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.1), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }));
        badge1.position.set(1.9, 0.8, 0.5);
        newModelGroup.add(badge1);

        const badge2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.1), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.6 }));
        badge2.position.set(-1.9, -0.4, 0.8);
        newModelGroup.add(badge2);

      } else if (serviceId === 'web-applications') {
        // 2. Realistic 3D Cloud SaaS Server & Holographic Console
        // Server Rack Base Frame
        const rackGeom = new THREE.BoxGeometry(3.6, 2.2, 0.8);
        const rackMat = new THREE.MeshStandardMaterial({
          color: 0x090e1a,
          metalness: 0.9,
          roughness: 0.2,
        });
        const rack = new THREE.Mesh(rackGeom, rackMat);
        rack.position.set(0, 0, -0.4);
        newModelGroup.add(rack);

        // Server Bay Slot Grooves
        for (let i = 0; i < 4; i++) {
          const slotGeom = new THREE.BoxGeometry(3.3, 0.32, 0.1);
          const slotMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 });
          const slot = new THREE.Mesh(slotGeom, slotMat);
          slot.position.set(0, 0.7 - i * 0.48, 0.42);
          rack.add(slot);

          // LED Status Lights
          [-1.4, -1.2, -1.0].forEach((x, lIdx) => {
            const led = new THREE.Mesh(new THREE.CircleGeometry(0.03, 8), new THREE.MeshBasicMaterial({
              color: lIdx === 0 ? 0x22c55e : 0x38bdf8,
            }));
            led.position.set(x, 0, 0.06);
            slot.add(led);
          });
        }

        // Floating 3D Extruded Bar Charts
        const barHeights = [0.8, 1.4, 1.1, 1.8, 2.2, 1.6];
        const chartGroup = new THREE.Group();
        chartGroup.position.set(0, -0.5, 0.6);

        barHeights.forEach((h, idx) => {
          const barGeom = new THREE.CylinderGeometry(0.14, 0.14, h, 16);
          const barMat = new THREE.MeshStandardMaterial({
            color: idx % 2 === 0 ? 0x38bdf8 : 0xa855f7,
            emissive: idx % 2 === 0 ? 0x0284c7 : 0x7e22ce,
            emissiveIntensity: 0.7,
            metalness: 0.8,
          });
          const bar = new THREE.Mesh(barGeom, barMat);
          bar.position.set(-1.2 + idx * 0.48, h / 2, 0);
          chartGroup.add(bar);
        });
        newModelGroup.add(chartGroup);

        // Floating KPI Ring Dial
        const kpiRingGeom = new THREE.TorusGeometry(0.5, 0.08, 16, 32);
        const kpiRingMat = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0284c7, emissiveIntensity: 0.8 });
        const kpiRing = new THREE.Mesh(kpiRingGeom, kpiRingMat);
        kpiRing.position.set(1.2, 1.0, 0.8);
        newModelGroup.add(kpiRing);

      } else if (serviceId === 'ecommerce') {
        // 3. Realistic Boutique Storefront & Luxury Display
        // Tiered Marble Base Display
        const marbleBaseGeom = new THREE.BoxGeometry(3.2, 0.25, 2.2);
        const marbleMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.7,
          roughness: 0.3,
        });
        const marbleBase = new THREE.Mesh(marbleBaseGeom, marbleMat);
        marbleBase.position.y = -0.9;
        newModelGroup.add(marbleBase);

        // Illuminated Glass Display Cube
        const displayGeom = new THREE.BoxGeometry(1.6, 1.6, 1.6);
        const displayMat = new THREE.MeshPhysicalMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.35,
          roughness: 0.05,
          transmission: 0.85,
        });
        const displayCube = new THREE.Mesh(displayGeom, displayMat);
        displayCube.position.set(0, 0.2, 0);
        newModelGroup.add(displayCube);

        // Floating Luxury Gold Product Artifact
        const goldGeom = new THREE.OctahedronGeometry(0.55, 0);
        const goldMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          emissive: 0xd97706,
          emissiveIntensity: 0.9,
          roughness: 0.1,
          metalness: 0.95,
        });
        const goldArtifact = new THREE.Mesh(goldGeom, goldMat);
        goldArtifact.position.set(0, 0.2, 0);
        newModelGroup.add(goldArtifact);
        dynamicElements.goldArtifact = goldArtifact;

        // Floating Wireframe Shopping Tote
        const toteGeom = new THREE.BoxGeometry(0.8, 0.9, 0.5);
        const toteMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true });
        const tote = new THREE.Mesh(toteGeom, toteMat);
        tote.position.set(1.4, 0.8, 0.6);
        newModelGroup.add(tote);

        // NFC Checkout Signal Rings
        const nfcRing = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.03, 12, 24), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
        nfcRing.position.set(-1.4, 0.6, 0.6);
        newModelGroup.add(nfcRing);

      } else if (serviceId === 'ui-ux-design') {
        // 4. Realistic 3D Design Studio Artboards & Swatches
        // Layered Translucent Artboard Planes
        for (let i = 0; i < 3; i++) {
          const artboardGeom = new THREE.BoxGeometry(2.2, 1.5, 0.04);
          const artboardMat = new THREE.MeshPhysicalMaterial({
            color: i === 0 ? 0x0c162c : i === 1 ? 0x1e1b4b : 0x083344,
            transparent: true,
            opacity: 0.75,
            roughness: 0.1,
            metalness: 0.8,
          });
          const artboard = new THREE.Mesh(artboardGeom, artboardMat);
          artboard.position.set(i * 0.35 - 0.35, i * 0.25 - 0.25, i * 0.45 - 0.45);
          artboard.rotation.set(-0.15, 0.35, -0.08);

          const border = new THREE.LineSegments(
            new THREE.EdgesGeometry(artboardGeom),
            new THREE.LineBasicMaterial({ color: i === 0 ? 0x38bdf8 : i === 1 ? 0xa855f7 : 0x22d3ee, opacity: 0.8 })
          );
          artboard.add(border);
          newModelGroup.add(artboard);
        }

        // Pantone Color Swatch Cubes
        const swatchColors = [0xef4444, 0x3b82f6, 0x10b981, 0x8b5cf6];
        swatchColors.forEach((col, idx) => {
          const sGeom = new THREE.BoxGeometry(0.32, 0.32, 0.15);
          const sMat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.6, metalness: 0.8 });
          const swatch = new THREE.Mesh(sGeom, sMat);
          swatch.position.set(-1.5 + idx * 0.45, 1.1, 0.5);
          newModelGroup.add(swatch);
        });

      } else if (serviceId === 'ai-solutions') {
        // 5. Realistic 3D Quantum Neural Cortex
        // Crystalline Dodecahedron Neural Core
        const coreGeom = new THREE.DodecahedronGeometry(0.85, 0);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 1.0,
          metalness: 0.9,
          roughness: 0.1,
        });
        const aiCore = new THREE.Mesh(coreGeom, coreMat);
        newModelGroup.add(aiCore);
        dynamicElements.aiCore = aiCore;

        // Concentric Synaptic Orbit Lattice Rings
        const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.03, 16, 48), new THREE.MeshBasicMaterial({ color: 0xa855f7 }));
        ring1.rotation.x = Math.PI / 3;
        newModelGroup.add(ring1);

        const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.025, 16, 48), new THREE.MeshBasicMaterial({ color: 0x22d3ee }));
        ring2.rotation.y = Math.PI / 3;
        newModelGroup.add(ring2);

        // Synaptic Axon Nodes & Connections
        const nodePositions: THREE.Vector3[] = [];
        const nodeGroup = new THREE.Group();

        for (let i = 0; i < 10; i++) {
          const angle = (i / 10) * Math.PI * 2;
          const r = 1.8 + (i % 2) * 0.4;
          const pos = new THREE.Vector3(
            Math.cos(angle) * r,
            Math.sin(angle * 2) * 0.8,
            Math.sin(angle) * r
          );
          nodePositions.push(pos);

          const nMesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshStandardMaterial({
            color: 0xa855f7,
            emissive: 0xa855f7,
            emissiveIntensity: 0.8,
          }));
          nMesh.position.copy(pos);
          nodeGroup.add(nMesh);
        }
        newModelGroup.add(nodeGroup);

        // Glowing Axon Line Conduits
        const lineGeom = new THREE.BufferGeometry();
        const linePoints: number[] = [];
        for (let i = 0; i < 10; i++) {
          linePoints.push(0, 0, 0);
          linePoints.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
        }
        lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
        const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
        const lines = new THREE.LineSegments(lineGeom, lineMat);
        newModelGroup.add(lines);

      } else {
        // 6. Custom Digital Solutions: Modular Architecture Compute Engine
        const modules = [
          { name: 'API GATEWAY', x: -0.9, y: 0.6, color: 0x38bdf8 },
          { name: 'POSTGRES DB', x: 0.9, y: 0.6, color: 0xa855f7 },
          { name: 'AUTH ENGINE', x: -0.9, y: -0.6, color: 0x22d3ee },
          { name: 'EVENT BUS', x: 0.9, y: -0.6, color: 0x3b82f6 },
        ];

        modules.forEach((mod) => {
          const blockGeom = new THREE.BoxGeometry(1.2, 0.8, 0.5);
          const blockMat = new THREE.MeshStandardMaterial({
            color: mod.color,
            roughness: 0.2,
            metalness: 0.85,
            emissive: mod.color,
            emissiveIntensity: 0.35,
          });
          const block = new THREE.Mesh(blockGeom, blockMat);
          block.position.set(mod.x, mod.y, 0);

          const wire = new THREE.LineSegments(
            new THREE.EdgesGeometry(blockGeom),
            new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 })
          );
          block.add(wire);
          newModelGroup.add(block);
        });

        // Interconnecting Fiber Pipelines
        const pipeH = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.0), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
        pipeH.rotation.z = Math.PI / 2;
        newModelGroup.add(pipeH);

        const pipeV = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.8), new THREE.MeshBasicMaterial({ color: 0xa855f7 }));
        newModelGroup.add(pipeV);
      }

      animate();
    };

    const animate = () => {
      if (!isVisible || !renderer || !scene || !camera) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (performance.now() - startTime) / 1000;

      if (!prefersReducedMotion && modelGroup && baseGroup) {
        const speed = isHovered ? 1.6 : 0.7;
        modelGroup.rotation.y = elapsed * 0.35 * speed;
        modelGroup.position.y = Math.sin(elapsed * 2) * 0.08;
        baseGroup.rotation.y = -elapsed * 0.08;

        if (dynamicElements.goldArtifact) {
          dynamicElements.goldArtifact.rotation.y = elapsed * 0.8;
          dynamicElements.goldArtifact.rotation.z = Math.sin(elapsed) * 0.2;
        }

        if (dynamicElements.aiCore) {
          dynamicElements.aiCore.rotation.y = -elapsed * 0.6;
          dynamicElements.aiCore.rotation.x = Math.sin(elapsed) * 0.3;
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
      modelGroup = null;
      baseGroup = null;
      dynamicElements = {};
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
  }, [serviceId, isHovered]);

  return <div ref={mountRef} className="w-full h-48 sm:h-52 relative overflow-hidden" />;
}
