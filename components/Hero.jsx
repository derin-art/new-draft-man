"use client";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { ShaderMouse } from "shader-mouse";
import vertexShader from "../shaders/vertex";

import fragmentShader from "../shaders/fragment";
import { useVideoTexture } from "@react-three/drei";

import { OrbitControls } from "three/examples/jsm/Addons.js";

const videoTexture = () => {
  const texture = useVideoTexture(
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  );
  return <meshBasicMaterial map={texture} toneMapped={false} />;
};

const returnVideoTexture = () => {
  const video = document.createElement("video");
  video.crossOrigin = "anonymous";
  video.src = "/vid.mp4";
  video.loop = true;
  video.muted = true;
  video.play();
  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBFormat;
  return videoTexture;
};

function Plane({ position, color, shaderMouse }) {
  const meshRef = useRef();

  // persistent refs (important!)
  const mouse = useRef(new THREE.Vector2(0, 0));
  const prevMouse = useRef(new THREE.Vector2(0, 0));
  const velocity = useRef(0);
  const smoothVelocity = useRef(0);

  const clock = useRef(new THREE.Timer());

  // 🎯 Mouse tracking (only once)
  useEffect(() => {
    const handleMouseMove = (e) => {
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

  // 🎨 uniforms
  const uniforms = useMemo(
    () => ({
      uMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      uColor: { value: new THREE.Color(color) },
      uTexture: { value: returnVideoTexture() },
      uTime: { value: 0 },
    }),
    [color],
  );

  // 🔄 animation loop
  useEffect(() => {
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // smooth velocity (this is what makes it feel premium)
      smoothVelocity.current +=
        (velocity.current - smoothVelocity.current) * 0.1;

      // update uniforms
      uniforms.uMouse.value.set(
        mouse.current.x,
        mouse.current.y,
        smoothVelocity.current,
        0, // click (optional)
      );

      uniforms.uTime.value = clock.current.getElapsed();
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [uniforms]);

  // optional shaderMouse integration
  useEffect(() => {
    if (meshRef.current && shaderMouse) {
      shaderMouse.add(meshRef.current);
      return () => shaderMouse.remove(meshRef.current);
    }
  }, [shaderMouse]);

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
      // screen is wider → match width, overflow height
      width = viewWidth;
      height = viewWidth / targetAspect;
    } else {
      // screen is taller → match height, overflow width
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
  const { camera, gl } = useThree();
  const shaderMouseRef = useRef();

  useEffect(() => {
    shaderMouseRef.current = new ShaderMouse({
      domElement: gl.domElement,
      camera,
    });

    return () => shaderMouseRef.current?.dispose();
  }, [camera, gl]);

  return (
    <>
      {/*  <Plane
        position={[0, 0, 2]}
        color="#ff6b6b"
        shaderMouse={shaderMouseRef.current}
      /> */}
      <Plane
        position={[0, 0, 0]}
        color="#000000"
        shaderMouse={shaderMouseRef.current}
      />
    </>
  );
}

export default function App() {
  const [viewport, setViewPort] = useState({ x: 0, y: 0 });
  useEffect(() => {
    setViewPort({ x: window.innerWidth, y: window.innerHeight });

    const resizeHander = (e) => {
      setViewPort({ x: window.innerWidth, y: window.innerHeight });
    };

    addEventListener("resize", resizeHander);
    return () => {
      removeEventListener("resize", resizeHander);
    };
  }, [window]);
  return (
    <Canvas
      style={{
        height: viewport.y,
        width: viewport.x,
      }}
      className=""
      camera={{ position: [0, 0, 2], fov: 125 }}
    >
      <Scene />
    </Canvas>
  );
}
