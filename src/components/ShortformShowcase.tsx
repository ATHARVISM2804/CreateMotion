import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { TrendingUp, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const reels = [
  { 
    id: 1, 
    title: 'Apple Style', 
    views: '2.3M', 
    color: 'from-gray-700 to-gray-900',
    video: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760522771/apple_style_lni1uq.mp4' 
  },
  { 
    id: 2, 
    title: 'Real Estate', 
    views: '890K', 
    color: 'from-sky-500 to-blue-600',
    video: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760522459/real_estate_dxznme.mp4' 
  },
  { 
    id: 3, 
    title: 'Mograph Edits', 
    views: '1.5M', 
    color: 'from-cyan-500 to-blue-600',
    video: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760522956/Comp_1_k92a4m.mp4' 
  },
  { 
    id: 4, 
    title: 'Talking Head', 
    views: '3.1M', 
    color: 'from-emerald-500 to-teal-600',
    video: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760523413/trending_short_edit_gvjhlo.mp4' 
  },
  { 
    id: 5, 
    title: 'Dan Koe Style', 
    views: '1.2M', 
    color: 'from-orange-500 to-amber-600',
    video: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760523961/dan_koe_style_animation_1_a4c7rb.mp4' 
  },
 
];

export default function ShortformShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-fuchsia-500 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-blue-500 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-[pulse_15s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-lg blur-xl opacity-30"></div>
            <h2 className="relative text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">
              Shortform Showcase
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Viral-worthy content that <span className="text-cyan-400 font-semibold">stops the scroll</span>
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {reels.map((reel, index) => (
            <VideoCard 
              key={reel.id} 
              reel={reel} 
              index={index} 
              activeVideo={activeVideo} 
              setActiveVideo={setActiveVideo}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function VideoCard({ 
  reel, 
  index, 
  activeVideo, 
  setActiveVideo,
  isMuted,
  setIsMuted
}: { 
  reel: typeof reels[number], 
  index: number, 
  activeVideo: number | null,
  setActiveVideo: React.Dispatch<React.SetStateAction<number | null>>,
  isMuted: boolean,
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnail, setThumbnail] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPlaying = activeVideo === reel.id;
  
  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Handle mouse move for tilt effect
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  // Reset tilt when mouse leaves
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  // Generate thumbnail from the video's first frame
  useEffect(() => {
    if (reel.video) {
      // Use Cloudinary transformation to get the first frame (so_0 means frame at 0 seconds)
      const thumbnailUrl = reel.video.replace('/upload/', '/upload/so_0,f_jpg,q_auto/');
      setThumbnail(thumbnailUrl);
      
      // Create a temporary video element to capture the first frame
      const tempVideo = document.createElement('video');
      tempVideo.crossOrigin = 'anonymous';
      tempVideo.src = reel.video;
      tempVideo.muted = true;
      tempVideo.playsInline = true;
      
      // When metadata is loaded, seek to the first frame
      tempVideo.onloadedmetadata = () => {
        tempVideo.currentTime = 0.1; // Seek to 0.1 seconds to ensure we get a frame
      };
      
      // When we can get the frame, capture it
      tempVideo.onseeked = () => {
        try {
          // Create canvas to capture the frame
          const canvas = document.createElement('canvas');
          canvas.width = tempVideo.videoWidth;
          canvas.height = tempVideo.videoHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/jpeg', 0.8);
            setThumbnail(dataURL);
          }
        } catch (e) {
          console.error("Error capturing thumbnail", e);
          // Fallback to Cloudinary thumbnail
        } finally {
          tempVideo.remove(); // Clean up
          setIsLoaded(true);
        }
      };

      // Handle errors by using the Cloudinary thumbnail
      tempVideo.onerror = () => {
        console.warn("Could not generate thumbnail locally, using Cloudinary");
        setIsLoaded(true);
      };
      
      return () => {
        tempVideo.remove(); // Clean up on unmount
      };
    }
  }, [reel.video]);

  const togglePlayback = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setActiveVideo(null);
    } else {
      // Pause any currently playing video first
      if (activeVideo !== null) {
        const currentlyPlaying = document.getElementById(`video-${activeVideo}`) as HTMLVideoElement;
        if (currentlyPlaying) currentlyPlaying.pause();
      }
      
      // Play this video
      if (videoRef.current) {
        videoRef.current.muted = isMuted;
        videoRef.current.play();
      }
      setActiveVideo(reel.id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent video play/pause
    setIsMuted(!isMuted);
    
    // Update currently playing video if there is one
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Staggered animation with different directions based on index
  const getAnimationVariant = () => {
    const baseDelay = 0.1 + index * 0.15;
    const direction = index % 3 === 0 ? -30 : index % 3 === 1 ? 0 : 30;
    
    return {
      initial: { opacity: 0, y: 50, x: direction },
      animate: { 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: { 
          duration: 0.8, 
          delay: baseDelay,
          ease: [0.19, 1.0, 0.22, 1.0] 
        }
      }
    };
  };

  const cardVariants = getAnimationVariant();

  return (
    <motion.div
      initial={cardVariants.initial}
      whileInView={cardVariants.animate}
      viewport={{ once: true }}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      className="relative aspect-[9/16] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-xl md:shadow-2xl w-full mx-auto border border-white/10 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm group"
      onClick={togglePlayback}
    >
      {/* Enhanced glowing border effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl"
        animate={{
          boxShadow: isHovered 
            ? `0 0 25px 8px rgba(${reel.id % 2 ? '6, 182, 212' : '236, 72, 153'}, 0.4)` 
            : '0 0 0px 0px rgba(0, 0, 0, 0)'
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-400/50 rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl sm:rounded-bl-2xl md:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl sm:rounded-br-2xl md:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}></div>

      {reel.video ? (
        <>
          {/* Thumbnail/poster image with animated reveal */}
          {!isPlaying && (
            <motion.div 
              className="absolute inset-0 bg-black"
              animate={{ opacity: isHovered ? 0.7 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {thumbnail && (
                <img 
                  src={thumbnail} 
                  alt={reel.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(0px)" }}
                />
              )}
              
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                  <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-cyan-400 animate-spin"></div>
                </div>
              )}
            </motion.div>
          )}
          
          <video
            id={`video-${reel.id}`}
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            poster={thumbnail}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(0px)" }}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
          >
            <source src={reel.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${reel.color}`} style={{ transformStyle: "preserve-3d", transform: "translateZ(0px)" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Video not available</span>
          </div>
        </div>
      )}

      {/* Enhanced overlay with depth effect */}
      <div 
        className="absolute inset-0 transition-all duration-500 pointer-events-none"
        style={{ 
          background: `linear-gradient(180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,${isHovered ? '0.3' : '0.5'}) 50%, 
            rgba(0,0,0,${isHovered ? '0.7' : '0.85'}) 100%)`,
          transformStyle: "preserve-3d",
          transform: "translateZ(2px)"
        }}
      >
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Enhanced trending badge with glow effect */}
      <motion.div 
        className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex items-center gap-1 sm:gap-2 bg-black/50 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 shadow-lg"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
        whileHover={{ scale: 1.1 }}
        animate={{ 
          boxShadow: isHovered ? '0 0 15px rgba(6, 182, 212, 0.6)' : '0 0 0px rgba(0, 0, 0, 0)',
          y: isHovered ? -2 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
        <span className="text-xs sm:text-sm text-white font-semibold">{reel.views}</span>
      </motion.div>

      {/* Enhanced play/pause button with more pronounced animation */}
      <AnimatePresence>
        {(isHovered || isPlaying) && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
          >
            <motion.div 
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-auto"
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white drop-shadow-lg" />
              ) : (
                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white ml-1 drop-shadow-lg" />
              )}
              
              {/* Animated pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced sound toggle button with animation */}
      <AnimatePresence>
        {(isHovered || isPlaying) && (
          <motion.div 
            className="absolute bottom-12 sm:bottom-16 md:bottom-20 right-3 sm:right-4 md:right-6 z-10 pointer-events-auto"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMute}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
          >
            <motion.div 
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full 
                ${isMuted ? 'bg-black/60' : 'bg-gradient-to-br from-cyan-500/80 to-cyan-700/80'} 
                backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced title with animated glow and better mobile responsiveness */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5"
        style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
      >
        <motion.div 
          className="relative"
          animate={{ 
            textShadow: isHovered 
              ? '0 0 12px rgba(255,255,255,0.9)' 
              : '0 0 0px rgba(255,255,255,0)' 
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 rounded-lg blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Title with animated background highlight */}
          <motion.div 
            className="relative px-2 py-1 rounded-lg group-hover:bg-black/30 backdrop-blur-sm transition-colors duration-300"
            animate={{ y: isHovered ? -3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{reel.title}</h3>
            
            {/* Mobile-visible indicator */}
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium">Tap to play</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced border glow effect with smoother animation */}
      <motion.div 
        className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none"
        animate={{ 
          boxShadow: isHovered 
            ? `inset 0 0 0 2px ${index % 2 ? '#06B6D4' : '#EC4899'}` 
            : 'inset 0 0 0 1px rgba(255,255,255,0.1)'
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
