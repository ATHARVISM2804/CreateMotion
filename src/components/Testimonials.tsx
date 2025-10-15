import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'TechFlow Inc',
    text: 'CreateMotion transformed our brand presence. Their motion graphics are simply breathtaking, and the engagement we\'ve seen is incredible.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 2,
    name: 'David Park',
    role: 'Content Creator',
    company: '2M+ Subscribers',
    text: 'Working with CreateMotion has been a game-changer. Their thumbnail designs increased my CTR by 40%, and their edits are always on point.',
    color: 'from-magenta-500 to-purple-600',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Brand Manager',
    company: 'Pulse Digital',
    text: 'The team\'s attention to detail and creative vision exceeded all expectations. Every project is delivered with polish and professionalism.',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Startup Founder',
    company: 'GrowthLab',
    text: 'CreateMotion helped us launch with a bang. Their shortform content went viral and brought us thousands of new customers in the first week.',
    color: 'from-orange-500 to-red-600',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-magenta-500/10 rounded-full filter blur-[100px]"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Client Love
          </h2>
          <p className="text-xl text-gray-400">Hear what our partners have to say</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="glass-panel p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="absolute -top-6 left-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center shadow-2xl`}>
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[current].color}`}></div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                      <p className="text-cyan-400">{testimonials[current].role}</p>
                      <p className="text-sm text-gray-500">{testimonials[current].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="relative w-2 h-2 rounded-full transition-all duration-300"
                >
                  <div className={`absolute inset-0 rounded-full ${index === current ? 'bg-cyan-400 scale-150' : 'bg-white/30'}`}></div>
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
