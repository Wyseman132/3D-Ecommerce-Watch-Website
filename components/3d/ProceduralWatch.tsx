import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Torus, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX types in the current environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      primitive: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

interface ProceduralWatchProps {
  colors: {
    case: string;
    dial: string;
    strap: string;
  };
  scale?: number;
  rotation?: [number, number, number];
}

const ProceduralWatch: React.FC<ProceduralWatchProps> = ({ colors, scale = 1, rotation = [0, 0, 0] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animate hands slowly
  const hourHandRef = useRef<THREE.Mesh>(null);
  const minuteHandRef = useRef<THREE.Mesh>(null);
  const secondHandRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (secondHandRef.current) {
      secondHandRef.current.rotation.z = -state.clock.elapsedTime * 0.5;
    }
    if (minuteHandRef.current) {
      minuteHandRef.current.rotation.z = -state.clock.elapsedTime * 0.5 / 60;
    }
    if (hourHandRef.current) {
        hourHandRef.current.rotation.z = -state.clock.elapsedTime * 0.5 / 720;
    }
  });

  const metalMaterial = new THREE.MeshStandardMaterial({
    color: colors.case,
    metalness: 1,
    roughness: 0.15,
  });

  const dialMaterial = new THREE.MeshStandardMaterial({
    color: colors.dial,
    metalness: 0.2,
    roughness: 0.8,
  });

  const strapMaterial = new THREE.MeshStandardMaterial({
    color: colors.strap,
    roughness: 0.9,
    metalness: 0.1,
  });
  
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.9,
    opacity: 1,
    roughness: 0,
    ior: 1.5,
    thickness: 0.5,
    color: '#ffffff',
  });

  const goldAccent = new THREE.MeshStandardMaterial({
      color: "#D4AF37",
      metalness: 1,
      roughness: 0.1
  });

  return (
    <group ref={groupRef} scale={scale} rotation={rotation} dispose={null}>
      {/* Watch Case Main Body */}
      <Cylinder args={[2, 2, 0.5, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={metalMaterial} />
      </Cylinder>

      {/* Bezel */}
      <Torus args={[2.1, 0.15, 16, 64]} rotation={[0, 0, 0]}>
         <primitive object={metalMaterial} />
      </Torus>

      {/* Dial Face */}
      <Cylinder args={[1.9, 1.9, 0.1, 64]} position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={dialMaterial} />
      </Cylinder>

      {/* Glass */}
      <Cylinder args={[2, 2, 0.1, 64]} position={[0, 0, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={glassMaterial} />
      </Cylinder>

      {/* Hour Markers (simplified) */}
      {[...Array(12)].map((_, i) => (
        <Box 
          key={i} 
          args={[0.1, 0.4, 0.05]} 
          position={[
            Math.sin((i * Math.PI) / 6) * 1.6, 
            Math.cos((i * Math.PI) / 6) * 1.6, 
            0.26
          ]}
          rotation={[0, 0, -(i * Math.PI) / 6]}
        >
             <primitive object={goldAccent} />
        </Box>
      ))}

      {/* Hands */}
      <group position={[0, 0, 0.28]}>
        <mesh ref={hourHandRef} position={[0, 0, 0]}>
          <boxGeometry args={[0.15, 1.2, 0.02]} />
           <primitive object={goldAccent} />
           <mesh position={[0, -0.6, 0]} /> {/* Pivot adjustment */}
        </mesh>
        <mesh ref={minuteHandRef} position={[0, 0, 0.01]}>
          <boxGeometry args={[0.1, 1.8, 0.02]} />
           <primitive object={goldAccent} />
        </mesh>
        <mesh ref={secondHandRef} position={[0, 0, 0.02]}>
          <boxGeometry args={[0.04, 1.9, 0.02]} />
          <meshStandardMaterial color="red" />
        </mesh>
        {/* Center Cap */}
        <Sphere args={[0.1, 16, 16]} position={[0, 0, 0.03]}>
             <primitive object={goldAccent} />
        </Sphere>
      </group>

      {/* Lugs Top */}
      <Box args={[0.8, 1, 0.5]} position={[0, 2.4, -0.1]}>
        <primitive object={metalMaterial} />
      </Box>
       {/* Lugs Bottom */}
       <Box args={[0.8, 1, 0.5]} position={[0, -2.4, -0.1]}>
        <primitive object={metalMaterial} />
      </Box>

      {/* Strap Top */}
      <Box args={[1.4, 2, 0.3]} position={[0, 3.5, -0.1]} rotation={[-0.2, 0, 0]}>
        <primitive object={strapMaterial} />
      </Box>
       {/* Strap Bottom */}
       <Box args={[1.4, 2, 0.3]} position={[0, -3.5, -0.1]} rotation={[0.2, 0, 0]}>
        <primitive object={strapMaterial} />
      </Box>

      {/* Crown */}
      <Cylinder args={[0.2, 0.2, 0.3, 16]} position={[2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
         <primitive object={goldAccent} />
      </Cylinder>
    </group>
  );
};

export default ProceduralWatch;