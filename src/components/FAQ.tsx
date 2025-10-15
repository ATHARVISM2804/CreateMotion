import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What types of projects do you specialize in?',
    answer: 'We specialize in motion graphics, video editing, shortform content creation, thumbnail design, and comprehensive brand visuals. Whether you need a 15-second reel or a full-length promotional video, we\'ve got you covered.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'Turnaround times vary based on project complexity. Simple edits and thumbnails can be delivered in 2-3 days, while complex motion graphics projects may take 1-2 weeks. Rush services are available for urgent needs.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'All packages include multiple revision rounds. Our Basic plan includes 2 revisions, Pro includes 4, and Cinematic includes unlimited revisions until you\'re 100% satisfied with the final result.',
  },
  {
    question: 'Do you work with brands of all sizes?',
    answer: 'Absolutely! We work with everyone from individual content creators and startups to established brands and agencies. Our flexible approach ensures we can scale our services to match your needs and budget.',
  },
  {
    question: 'What formats do you deliver in?',
    answer: 'We deliver in all standard formats optimized for your platform of choice—MP4, MOV, ProRes for video, and PNG/JPG for thumbnails. We also provide platform-specific exports (Instagram, YouTube, TikTok, LinkedIn, etc.).',
  },
  {
    question: 'Can you help with ongoing content creation?',
    answer: 'Yes! We offer monthly retainer packages for clients who need consistent content. This ensures priority scheduling, better rates, and a streamlined workflow as we become intimately familiar with your brand.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-magenta-500/10 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-magenta-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              <div className="relative glass-panel rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-cyan-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
