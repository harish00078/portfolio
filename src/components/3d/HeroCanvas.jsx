import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = ({ theme, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={theme === 'light' ? '#000000' : '#f272c8'}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ShootingStar = ({ theme }) => {
  const ref = useRef();
  // Random speed between 8 and 15 (slower)
  const speed = useMemo(() => 8 + Math.random() * 7, []);
  // Random scale for variety (smaller)
  const scale = useMemo(() => 0.3 + Math.random() * 0.5, []);
  
  const resetStar = (initial = false) => {
    if (!ref.current) return;
    
    const laneOffset = (Math.random() * 40) - 20; 
    // Adjusted baseOffset for slower speed to keep continuity
    const baseOffset = initial ? (Math.random() * 80 - 40) : (30 + Math.random() * 30);

    ref.current.position.set(
      laneOffset - baseOffset, 
      laneOffset + baseOffset, 
      -1 
    );
  };

  useEffect(() => {
    resetStar(true);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    ref.current.position.x += delta * speed;
    ref.current.position.y -= delta * speed;
    
    ref.current.children[0].rotation.z += delta * 5;

    if (ref.current.position.y < -30 || ref.current.position.x > 30) {
      resetStar();
    }
  });

  const color = 'lightskyblue';

  return (
    <group ref={ref} rotation={[0, 0, -Math.PI / 4]} scale={scale}>
      
      {/* 1. The Head (Star) */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.15, 0]} /> 
        <meshBasicMaterial color={color} />
      </mesh>

      {/* 2. The Tail (Gradient/Fade effect simulated with tapered cylinder) */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0, 0.08, 2.5, 8]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={theme === 'light' ? 0.3 : 0.5} 
        />
      </mesh>
    </group>
  );
};

const HeroCanvas = ({ theme }) => {
  // Create a pool of stars
  const starCount = 40;
  
  return (
    <div className="w-full h-auto absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Stars theme={theme} />
        
        {/* Render the pool of shooting stars */}
        {[...Array(starCount)].map((_, i) => (
          <ShootingStar key={i} theme={theme} />
        ))}
        
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
