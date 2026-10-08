'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  className?: string;
}

export default function StudioHero3D({ className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xF7F6F2, 2.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x18283B, 3.0);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xD9D8D3, 2.5);
    dirLight2.position.set(-5, -5, -3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x111111, 2.0, 10);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // 4. Main 3D Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Geometric Core - Faceted Icosahedron with Wireframe & Core Glass
    const coreGeo = new THREE.IcosahedronGeometry(2.0, 1);
    
    // Solid Faceted Material
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xFAF9F6,
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.6,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // Wireframe Lattice Cage
    const wireGeo = new THREE.IcosahedronGeometry(2.02, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x18283B,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    sculptureGroup.add(wireMesh);

    // Inner Floating Slate Cube
    const innerGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.7,
      roughness: 0.3,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    sculptureGroup.add(innerMesh);

    // Floating Orbital Architectural Rings
    const ring1Geo = new THREE.TorusGeometry(3.0, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    sculptureGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.4, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x18283B, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    sculptureGroup.add(ring2);

    // Surrounding Satellite Data Nodes
    const satellites: THREE.Mesh[] = [];
    const satGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({ color: 0x18283B, metalness: 0.8, roughness: 0.2 });

    for (let i = 0; i < 6; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / 6) * Math.PI * 2;
      const radius = 3.0;
      sat.position.set(Math.cos(angle) * radius, (Math.sin(angle * 2) * 0.5), Math.sin(angle) * radius);
      satellites.push(sat);
      sculptureGroup.add(sat);
    }

    // 5. Mouse Interaction / Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;

      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 480;
      const newHeight = container.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation
      coreMesh.rotation.y += 0.004;
      wireMesh.rotation.y += 0.004;
      innerMesh.rotation.x += 0.008;
      innerMesh.rotation.y -= 0.006;

      ring1.rotation.z += 0.003;
      ring2.rotation.z -= 0.002;

      // Orbit satellites
      satellites.forEach((sat, i) => {
        const offset = (i / 6) * Math.PI * 2;
        const currentAngle = elapsedTime * 0.4 + offset;
        sat.position.x = Math.cos(currentAngle) * 3.0;
        sat.position.z = Math.sin(currentAngle) * 3.0;
        sat.position.y = Math.sin(elapsedTime * 1.2 + i) * 0.4;
      });

      // Lerp toward mouse position
      sculptureGroup.rotation.y += (targetRotationY - sculptureGroup.rotation.y) * 0.05;
      sculptureGroup.rotation.x += (targetRotationX - sculptureGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[360px] sm:min-h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Studio Architecture Sculpture"
    />
  );
}
