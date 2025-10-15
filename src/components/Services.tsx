import { motion } from 'framer-motion';
import { Film, Video, Smartphone, Image, Palette } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Motion Graphics',
    description: 'Stunning animated visuals that bring your brand to life',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional editing that transforms raw footage into compelling stories',
    color: 'from-magenta-500 to-purple-600',
  },
  {
    icon: Smartphone,
    title: 'Shortform Creation',
    description: 'Viral-worthy content optimized for social media platforms',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    icon: Image,
    title: 'Thumbnail Design',
    description: 'Eye-catching thumbnails that maximize click-through rates',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Palette,
    title: 'Brand Visuals',
    description: 'Cohesive visual identities that make your brand unforgettable',
    color: 'from-violet-500 to-fuchsia-600',
  },
];

export default function Services() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-400">Comprehensive creative services for modern brands</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              <motion.div
                className="relative glass-panel p-8 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 h-full"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                <motion.div
                  className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: 'blur(20px)' }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
