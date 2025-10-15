import { motion } from 'framer-motion';
import { Eye, MousePointer2 } from 'lucide-react';
import { useState } from 'react';

const thumbnails = [
  { 
    id: 1, 
    title: 'Tech Review', 
    ctr: '12.4%', 
    image: '/thumbnails/tech-review.jpg',
    alt: 'Blue gradient tech review thumbnail with engagement metrics'
  },
  { 
    id: 2, 
    title: 'Gaming Stream', 
    ctr: '15.2%', 
    image: '/thumbnails/gaming-stream.jpg',
    alt: 'Purple gradient gaming stream thumbnail with engagement metrics'
  },
  { 
    id: 3, 
    title: 'Cooking Tutorial', 
    ctr: '18.7%', 
    image: '/thumbnails/cooking-tutorial.jpg',
    alt: 'Orange gradient cooking tutorial thumbnail with engagement metrics'
  },
  { 
    id: 4, 
    title: 'Fitness Challenge', 
    ctr: '14.1%', 
    image: '/thumbnails/fitness-challenge.jpg',
    alt: 'Green gradient fitness challenge thumbnail with engagement metrics'
  },
  { 
    id: 5, 
    title: 'Travel Vlog', 
    ctr: '16.8%', 
    image: '/thumbnails/travel-vlog.jpg',
    alt: 'Teal gradient travel vlog thumbnail with engagement metrics'
  },
  { 
    id: 6, 
    title: 'Podcast Clip', 
    ctr: '11.9%', 
    image: '/thumbnails/podcast-clip.jpg',
    alt: 'Purple gradient podcast clip thumbnail with engagement metrics'
  },
];

export default function ThumbnailDesigns() {
  // Track loading state for each image
  const [imageLoadErrors, setImageLoadErrors] = useState<{[key: number]: boolean}>({});

  // Function to get image URL based on the image we've seen in the attachment
  const getThumbnailImage = (title: string) => {
    switch(title) {
      case 'Tech Review':
        return 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop';
      case 'Gaming Stream':
        return 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=870&auto=format&fit=crop';
      case 'Cooking Tutorial':
        // Updated more reliable cooking image URL
        return 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1000&auto=format&fit=crop';
      case 'Fitness Challenge':
        return 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=870&auto=format&fit=crop';
      case 'Travel Vlog':
        return 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=870&auto=format&fit=crop';
      case 'Podcast Clip':
        return 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=870&auto=format&fit=crop';
      default:
        return 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop';
    }
  };

  // Fallback image in case the main image fails to load
  const getFallbackImage = (title: string) => {
    switch(title) {
      case 'Cooking Tutorial':
        return 'https://images.unsplash.com/photo-1607877742574-77da9735f9c8?q=80&w=1000&auto=format&fit=crop';
      default:
        return 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=870&auto=format&fit=crop';
    }
  };

  const handleImageError = (id: number) => {
    setImageLoadErrors(prev => ({...prev, [id]: true}));
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-black to-black"></div>
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
            Thumbnail Designs
          </h2>
          <p className="text-xl text-gray-400">Click-worthy visuals that drive engagement</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thumbnails.map((thumb, index) => (
            <motion.div
              key={thumb.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Thumbnail image with fallback handling */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={imageLoadErrors[thumb.id] 
                      ? getFallbackImage(thumb.title) 
                      : getThumbnailImage(thumb.title)}
                    alt={thumb.alt || thumb.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(thumb.id)}
                    loading="eager"
                  />
                </div>

                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:opacity-75 transition-opacity duration-300"></div>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-panel px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <p className="text-white font-semibold">View Design Details</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTR metrics */}
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <div className="glass-panel px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-white font-semibold">{thumb.ctr}</span>
                  </div>
                </div>

                {/* Thumbnail title */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2">{thumb.title}</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MousePointer2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">High CTR</span>
                    </div>
                  </div>
                </div>

                {/* Border highlight */}
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl group-hover:ring-2 group-hover:ring-cyan-400/50 transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
