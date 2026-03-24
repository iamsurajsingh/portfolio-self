import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      setTrail(prev => {
        const newTrail = [...prev, newPosition];
        return newTrail.slice(-10); // Keep only last 10 positions
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden lg:block">
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-8 h-8 bg-purple-500/20 rounded-full blur-xl"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Trail particles */}
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
          initial={{
            x: pos.x - 4,
            y: pos.y - 4,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
