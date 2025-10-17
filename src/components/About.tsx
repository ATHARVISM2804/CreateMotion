import { motion } from 'framer-motion';
import { Sparkles, Zap, Check, Play, Award, Rocket, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full filter blur-[150px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-magenta-500/20 rounded-full filter blur-[150px]"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Visual header with accent */}
          <div className="inline-block relative mb-4">
            <motion.div 
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 to-magenta-500 opacity-70 blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative bg-black/60 backdrop-blur-sm text-cyan-300 px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
              Creative Excellence
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            About CreateMotion
          </h2>
          
          <div className="flex justify-center gap-2 items-center mb-6">
            <span className="h-1 w-12 rounded bg-cyan-500"></span>
            <span className="text-cyan-400 font-medium">Elevating Brands Through Motion</span>
            <span className="h-1 w-12 rounded bg-magenta-500"></span>
          </div>
        </motion.div>

        {/* Mission Statement Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="glass-panel p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden">
            {/* Accent corner decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-2xl"></div>
            
            <h3 className="text-3xl font-bold text-white mb-6 relative">Our Mission</h3>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              At CreateMotion, we believe every brand has a story worth telling. We transform ideas into immersive visual experiences that resonate, engage, and inspire action.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Our creative philosophy is simple: combine cutting-edge motion design with authentic storytelling to create content that doesn't just look beautiful—it performs.
            </p>

            {/* Highlighted quote */}
            <div className="border-l-4 border-cyan-400 pl-6 my-8">
              <p className="text-xl italic text-cyan-100">
                "We don't just make videos. We craft visual stories that drive results and leave lasting impressions."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-gray-400">Projects Delivered</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-magenta-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-magenta-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">50M+</p>
                  <p className="text-sm text-gray-400">Views Generated</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose CreateMotion</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Industry-leading motion design that sets your brand apart from competitors",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: Rocket,
                title: "Fast Turnaround",
                description: "Quick delivery without compromising on quality or attention to detail",
                color: "from-magenta-500 to-purple-600"
              },
              {
                icon: TrendingUp,
                title: "Results Driven",
                description: "Strategic creative designed to achieve your specific marketing objectives",
                color: "from-emerald-500 to-teal-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-900/40 to-magenta-900/40 border border-white/10">
            <div className="absolute -top-6 left-8">
              <span className="text-6xl text-cyan-500 opacity-80">"</span>
            </div>
            <p className="text-xl md:text-2xl text-white text-center italic pt-4 px-8">
              CreateMotion transformed our product launch video into an experience that captured exactly what makes our brand special. The engagement metrics speak for themselves.
            </p>
            <div className="mt-8 text-center">
              <p className="text-cyan-300 font-bold">Raman Saklani</p>
              <p className="text-sm text-gray-400">Founder ,CreateMotion</p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
