import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black bg-opacity-95" />

      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'normal',
        }}
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -50, 25, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'normal',
        }}
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.35) 0%, transparent 70%)',
          filter: 'blur(65px)',
          mixBlendMode: 'normal',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -60, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          mixBlendMode: 'normal',
        }}
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -45, 35, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 70%)',
          filter: 'blur(65px)',
          mixBlendMode: 'normal',
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)
          `,
          mixBlendMode: 'normal',
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(6, 182, 212, 0.15) 0%,
              transparent 20%,
              transparent 80%,
              rgba(217, 70, 239, 0.15) 100%
            )
          `,
          mixBlendMode: 'normal',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(6, 182, 212, 0.07) 2px,
              rgba(6, 182, 212, 0.07) 4px
            )
          `,
          opacity: 0.4,
          mixBlendMode: 'normal',
        }}
      />
      
      {/* Premium light streaks */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg,
              transparent 0%,
              rgba(255, 255, 255, 0.07) 50%,
              transparent 100%
            )
          `,
          mixBlendMode: 'normal',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Additional glow effect */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          mixBlendMode: 'normal',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
