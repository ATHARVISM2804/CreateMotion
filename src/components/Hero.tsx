import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  // WhatsApp link with predefined message
  const whatsappLink = "https://wa.me/918219276410?text=Hello%2C%20I%20want%20to%20discuss%20a%20creative%20project%20and%20learn%20more%20about%20your%20video%20editing%20and%20motion%20graphics%20services.%20Looking%20forward%20to%20creating%20magic%20together!";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
              y: [0, -10, 0] // Adding up and down animation: 0px → -10px → 0px
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }  // Slower, gentler motion
            }}
            style={{ backgroundSize: '200%' }}
          >
            CreateMotion
          </motion.h1>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-4xl text-gray-300 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where Vision Moves
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          We craft cinematic motion graphics, short-form edits, and visual stories that captivate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="relative px-12 py-5 bg-black rounded-2xl text-white text-lg font-semibold flex items-center gap-3 backdrop-blur-xl border border-white/10">
                <Sparkles className="w-5 h-5" />
                Let's Create Magic
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
