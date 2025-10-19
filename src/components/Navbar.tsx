import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);

  // WhatsApp link with predefined message
  const whatsappLink =
    'https://wa.me/918219276410?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20video%20editing%20and%20motion%20graphics%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information%3F';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        style={{ opacity: navOpacity }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500   ${
          isScrolled ? 'py-2 sm:py-2 md:py-2' : 'py-3 sm:py-3 md:py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 ">
          <motion.div
            className={`glass-panel rounded-xl sm:rounded-2xl border transition-all duration-500 !h-15  ${
              isScrolled
                ? 'bg-black/80 backdrop-blur-2xl border-white/20 shadow-xl sm:shadow-2xl shadow-cyan-500/10'
                : 'bg-black/40 backdrop-blur-xl border-white/10'
            }`}
          >
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between">
              <motion.a
                href="#"
                className="flex items-center gap-2 sm:gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                  />

                  {/* Logo container with shine effect */}
                  <div className="relative w-8 h-8 sm:w-3 sm:h-3 md:w-8 md:h-8 flex items-center justify-center overflow-hidden">
                    {/* The logo image */}
                    <img
                      src="https://res.cloudinary.com/dmhabztbf/image/upload/v1760706623/Screenshot_2025-10-17_183923_faoffi.png"
                      alt="CreateMotion Logo"
                      className="w-full h-full object-contain relative z-10"
                    />

                    {/* Animated shine effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 z-20"
                      animate={{
                        x: ['200%', '-200%'],
                        skew: ['-20deg', '-20deg'],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        ease: 'easeInOut',
                        repeatDelay: 3,
                      }}
                    />

                    {/* Additional sparkle effect */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 bottom-0 z-10"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                      }}
                    />
                  </div>
                </div>
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  CreateMotion
                </span>
              </motion.a>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="relative px-2 lg:px-4 py-2 text-gray-300 hover:text-white transition-colors group text-sm lg:text-base"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-400 group-hover:w-3/4 transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-3 lg:gap-4">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-lg lg:rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative px-4 lg:px-6 py-2 lg:py-2.5 bg-black rounded-lg lg:rounded-xl border border-white/10 text-white font-semibold text-sm lg:text-base">
                    Get Started
                  </div>
                </motion.a>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
              >
                {isOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 sm:top-20 md:top-24 left-0 right-0 z-40 md:hidden overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="glass-panel bg-black/95 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl sm:shadow-2xl">
            <div className="flex flex-col gap-1 sm:gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    <motion.div
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </span>
                </motion.a>
              ))}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-3 sm:mt-4 group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-lg sm:rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-black rounded-lg sm:rounded-xl border border-white/10 text-white font-semibold text-center text-sm sm:text-base">
                  Get Started
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
