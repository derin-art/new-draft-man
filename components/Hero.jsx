"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/vertex";
import fragmentShader from "../shaders/fragment";

const returnVideoTexture = () => {
  if (typeof window === "undefined") return null; // Safety for Next.js SSR

  const video = document.createElement("video");
  video.crossOrigin = "anonymous";
  video.src = "/vid.mp4";
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBAFormat; // RGBFormat is deprecated in newer Three.js versions
  return videoTexture;
};

function Plane({ position, color }) {
  const meshRef = useRef();

  // Persistent refs
  const mouse = useRef(new THREE.Vector2(0, 0));
  const prevMouse = useRef(new THREE.Vector2(0, 0));
  const velocity = useRef(0);
  const smoothVelocity = useRef(0);

  const clock = useRef(new THREE.Timer()); // Switched to THREE.Clock for wider compatibility

  // 🎯 Global Mouse tracking - This tracks everywhere over the HTML
  useEffect(() => {
    const handleMouseMove = (e) => {
      // 0.0 to 1.0 coordinates
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;

      mouse.current.set(x, y);

      velocity.current = mouse.current.distanceTo(prevMouse.current);
      prevMouse.current.copy(mouse.current);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 🎨 Uniforms
  const uniforms = useMemo(
    () => ({
      uMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      uColor: { value: new THREE.Color(color) },
      uTexture: { value: returnVideoTexture() },
      uTime: { value: 0 },
      uTint: { value: 0.4 },
    }),
    [color],
  );

  // 🔄 Animation loop
  useEffect(() => {
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Smooth velocity
      smoothVelocity.current +=
        (velocity.current - smoothVelocity.current) * 0.1;

      // Update uniforms directly from our window tracker
      if (uniforms.uMouse.value) {
        uniforms.uMouse.value.set(
          mouse.current.x,
          mouse.current.y,
          smoothVelocity.current,
          0,
        );
      }

      uniforms.uTime.value = clock.current.getElapsed();
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [uniforms]);

  const { camera, size } = useThree();
  const viewport = useMemo(() => {
    const distance = Math.abs(camera.position.z - position[2]);

    const vFov = (camera.fov * Math.PI) / 180;
    const viewHeight = 2 * Math.tan(vFov / 2) * distance;
    const viewWidth = viewHeight * camera.aspect;

    const targetAspect = 16 / 9;
    const viewAspect = viewWidth / viewHeight;

    let width, height;

    if (viewAspect > targetAspect) {
      width = viewWidth;
      height = viewWidth / targetAspect;
    } else {
      height = viewHeight;
      width = viewHeight * targetAspect;
    }

    return { width, height };
  }, [camera, position, size]);

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Scene() {
  // Removed shaderMouse initialization completely
  return (
    <>
      <Plane position={[0, 0, 0]} color="#000000" />
    </>
  );
}

export default function App() {
  const [viewport, setViewPort] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial size
    setViewPort({ x: window.innerWidth, y: window.innerHeight });

    const resizeHandler = () => {
      setViewPort({ x: window.innerWidth, y: window.innerHeight });
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []); // Empty dependency array prevents infinite re-renders in Next.js

  // Prevent rendering Canvas until viewport is measured to avoid hydration errors
  if (viewport.x === 0) return null;

  return (
    <Canvas
      style={{
        height: viewport.y,
        width: viewport.x,
      }}
      camera={{ position: [0, 0, 2], fov: 125 }}
    >
      <Scene />
    </Canvas>
  );
}
