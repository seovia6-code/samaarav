"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
varying vec2 vUv;

// Simplex 2D Noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  
  // Slow fluid movement
  float noise1 = snoise(uv * 1.5 + uTime * 0.04);
  float noise2 = snoise(uv * 2.0 - uTime * 0.05);
  
  // Distort uv coordinates to create swirling smoke/fluid effect
  uv.x += noise1 * 0.3;
  uv.y += noise2 * 0.3;
  
  float n1 = snoise(uv * 2.0 + uTime * 0.08);
  float n2 = snoise(uv * 3.0 - uTime * 0.1);
  
  // Normalize noise to 0..1
  n1 = n1 * 0.5 + 0.5;
  n2 = n2 * 0.5 + 0.5;
  
  // Mix colors
  vec3 colorA = mix(uColor1, uColor2, n1); 
  vec3 colorB = mix(uColor3, uColor4, n2);
  
  // Overall mixer to combine the light base with the deeper blue strokes
  float mixer = snoise(uv * 1.2 + uTime * 0.06) * 0.5 + 0.5;
  
  // Smoothstep to ensure it remains mostly light (colorA) with beautiful strokes of blue (colorB)
  mixer = smoothstep(0.1, 0.9, mixer);
  
  vec3 finalColor = mix(colorA, colorB, mixer * 0.6); 
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  // Full screen quad bypassing projection matrices
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FluidPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#ffffff") }, // Pure white base
      uColor2: { value: new THREE.Color("#e0e7ff") }, // Very light indigo/blue
      uColor3: { value: new THREE.Color("#2563eb") }, // Primary Electric Blue
      uColor4: { value: new THREE.Color("#06b6d4") }, // Secondary Cyan
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export default function FluidBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 100 }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <FluidPlane />
      </Canvas>

      {/* Grainy Noise Overlay for extra realism (like the screenshot) */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" 
        style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      />
    </div>
  );
}
