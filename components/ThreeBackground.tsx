import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Extend JSX.IntrinsicElements to include R3F elements that might be missing in the current TS environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      ambientLight: any;
    }
  }
}

interface ThreeBgProps {
  isDark: boolean;
}

const ParticleGlobe = ({ isDark }: { isDark: boolean }) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random points on a sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(3000 * 3); // 3000 particles
    for (let i = 0; i < 3000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.3 + Math.random() * 0.3; // Increased radius slightly for better spread
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Color Logic:
  // Dark Mode: #fbbf24 (Amber 400) - Bright/Glowing against black
  // Light Mode: #ca8a04 (Yellow 600) or #b45309 (Amber 700) - Dark/Bronze against white for contrast
  const particleColor = isDark ? "#fbbf24" : "#b45309"; 
  const particleOpacity = isDark ? 0.8 : 1.0; // Higher opacity in light mode to be visible

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.009}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={particleOpacity}
        />
      </Points>
    </group>
  );
};

const ThreeBackground: React.FC<ThreeBgProps> = ({ isDark }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 2.5] }} dpr={[1, 2]}>
        <ParticleGlobe isDark={isDark} />
        <ambientLight intensity={0.5} />
      </Canvas>
      
      {/* Overlay Updates: */}
      {/* Reduced the opacity of the white fade in Light Mode so particles are visible (via-transparent starts earlier, from-slate-50/0 instead of /80) */}
      
      {/* Vertical Fade */}
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-b ${
        isDark 
          ? "from-dark-950/80 via-transparent to-dark-950" 
          : "from-slate-50/20 via-transparent to-slate-50/80" 
      }`} />
      
      {/* Horizontal Fade - softer on light mode */}
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${
        isDark
          ? "from-dark-950 via-transparent to-transparent"
          : "from-slate-50/80 via-transparent to-transparent"
      }`} />
    </div>
  );
};

export default ThreeBackground;