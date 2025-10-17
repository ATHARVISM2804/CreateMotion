import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  // Email link instead of WhatsApp
  const emailLink = "mailto:createmotions3@gmail.com?subject=Let's%20Create%20Magic&body=Hello%2C%20I%20want%20to%20discuss%20a%20creative%20project%20and%20learn%20more%20about%20your%20video%20editing%20and%20motion%20graphics%20services.%20Looking%20forward%20to%20creating%20magic%20together!";

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-20 px-4">
      {/* Mobile-optimized background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full filter blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-fuchsia-500/20 rounded-full filter blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-2 xs:mb-3 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white leading-tight"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
              y: [0, -10, 0]
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{ backgroundSize: '200%' }}
          >
            Create
            <span className="block -mt-1 xs:mt-0 sm:-mt-2">Motion</span>
          </motion.h1>
        </motion.div>

        <motion.h2
          className="text-xl xs:text-2xl sm:text-2xl md:text-4xl text-gray-300 mb-3 sm:mb-6 md:mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where Vision Moves
        </motion.h2>

        <motion.p
          className="text-base xs:text-lg sm:text-lg md:text-xl text-gray-400 mb-6 xs:mb-7 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-1 sm:px-2"
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
            {/* Enhanced mobile-friendly glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-lg xs:rounded-xl sm:rounded-2xl blur-md sm:blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <a 
              href={emailLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="relative px-5 xs:px-6 sm:px-8 md:px-12 py-2.5 xs:py-3 sm:py-4 md:py-5 bg-black rounded-lg xs:rounded-xl sm:rounded-2xl text-white text-sm xs:text-base sm:text-lg font-semibold flex items-center gap-2 sm:gap-3 backdrop-blur-xl border border-white/10 shadow-xl">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                Let's Create Magic
              </button>
            </a>
          </div>
        </motion.div>
        
        {/* Mobile-friendly tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap gap-2 justify-center mt-5 sm:mt-8"
        >
          {["Motion Graphics", "Short Edits", "Visual FX"].map((tag, i) => (
            <div 
              key={i} 
              className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs sm:text-sm text-gray-200"
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-4 xs:bottom-5 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 sm:p-2 backdrop-blur-sm bg-black/10">
          <motion.div
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
