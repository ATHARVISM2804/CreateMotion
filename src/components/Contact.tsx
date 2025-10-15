import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(217, 70, 239, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
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
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400">Ready to bring your vision to life? Get in touch.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all backdrop-blur-sm"
                  />
                  {focused === 'name' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-xl blur-sm -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all backdrop-blur-sm"
                  />
                  {focused === 'email' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-xl blur-sm -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none backdrop-blur-sm"
                  />
                  {focused === 'message' && (
                    <motion.div
                      layoutId="input-glow"
                      className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-xl blur-sm -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-full py-4 bg-black rounded-xl flex items-center justify-center gap-3 border border-white/10">
                    <Send className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-lg">Send Message</span>
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Whether you have a project in mind or just want to chat about possibilities, we're here to help bring your creative vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:hello@createmotion.com"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">hello@createmotion.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-magenta-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="text-white font-semibold">@createmotion</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-semibold">CreateMotion Agency</p>
                  </div>
                </motion.a>
              </div>

              <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 backdrop-blur-xl border border-white/10">
                <p className="text-cyan-300 font-semibold mb-2">Response Time</p>
                <p className="text-white">We typically respond within 24 hours on business days.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
