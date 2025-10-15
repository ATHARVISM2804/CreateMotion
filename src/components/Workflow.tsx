import { motion } from 'framer-motion';
import { Search, Lightbulb, Scissors, RefreshCw, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We dive deep into your brand, goals, and target audience',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Crafting a creative direction that aligns with your vision',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Scissors,
    title: 'Creation',
    description: 'Bringing your story to life with cutting-edge techniques',
    color: 'from-purple-500 to-magenta-600',
  },
  {
    icon: RefreshCw,
    title: 'Revisions',
    description: 'Fine-tuning every detail until it\'s absolutely perfect',
    color: 'from-magenta-500 to-pink-600',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    description: 'Launching your content, optimized and ready to perform',
    color: 'from-pink-500 to-orange-600',
  },
];

export default function Workflow() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-magenta-900/10"></div>
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
            How We'll Work Together
          </h2>
          <p className="text-xl text-gray-400">A seamless journey from concept to completion</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-magenta-500 to-orange-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur-lg opacity-50"></div>
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center border-4 border-black`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                        <div className="text-sm text-cyan-400 font-bold mb-2">STEP {index + 1}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-10 right-0 w-full h-0.5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'left' }}
                  >
                    <div className={`h-full bg-gradient-to-r ${step.color}`}></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
