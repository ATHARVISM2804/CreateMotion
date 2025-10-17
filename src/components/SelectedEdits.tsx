import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const edits = [
  { 
    id: 1, 
    title: 'Long Form Talking Head', 
    category: 'Motion Graphics', 
    color: 'from-cyan-500 to-blue-600',
    videoUrl: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760524420/client_vid_4k_30_sec_intro_vqgpvg.mp4'
  },
  { 
    id: 2, 
    title: 'Voice Over Motion Graphics', 
    category: 'Video Editing', 
    color: 'from-fuchsia-500 to-purple-600',
    videoUrl: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760524573/iman_gadzi_style_edit_motion_graphics_l8vaty.mp4'
  },
  { 
    id: 3, 
    title: 'Documentary Style', 
    category: 'Cinematic', 
    color: 'from-teal-500 to-emerald-600',
    videoUrl: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760524857/coco_cola_magnet_media_my_edit_with_voice_turi40.mp4'
  },
  { 
    id: 4, 
    title: 'YouTube Content', 
    category: 'Shortform', 
    color: 'from-orange-500 to-red-600',
    videoUrl: 'https://res.cloudinary.com/dpuo61nz6/video/upload/v1760525454/edge_pzk9j1.mp4'
  },
];

export default function SelectedEdits() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [thumbnails, setThumbnails] = useState<string[]>(Array(edits.length).fill(''));
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Generate thumbnails automatically
  useEffect(() => {
    edits.forEach((edit, index) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = edit.videoUrl;
      video.muted = true;
      video.preload = 'metadata';
      
      video.addEventListener('loadeddata', () => {
        video.currentTime = 1;
      });

      video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL('image/jpeg');
          setThumbnails(prev => {
            const newThumbnails = [...prev];
            newThumbnails[index] = dataURL;
            return newThumbnails;
          });
        }
      });
    });
  }, []);

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(id);
    setTimeout(() => {
      const videoElement = videoRefs.current[id - 1];
      if (videoElement) {
        videoElement.muted = false;
        videoElement.controls = true;
        videoElement.playsInline = true;
        videoElement.currentTime = 0;
        videoElement.focus();
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            videoElement.controls = true;
          });
        }
      }
    }, 150);
  };

  const handleCloseVideo = () => {
    if (playingVideo === null) return;
    const videoElement = videoRefs.current[playingVideo - 1];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
    setPlayingVideo(null);
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Selected Long Edits
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Our finest work, handpicked for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {edits.map((edit, index) => (
            <motion.div
  key={edit.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ y: -10, scale: 1.02 }}
  onHoverStart={() => setHoveredCard(edit.id)}
  onHoverEnd={() => setHoveredCard(null)}
  className={`group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 transform ${
    hoveredCard === edit.id ? 'z-20' : 'z-10'
  }`}
>
  {playingVideo === edit.id ? (
    <div className="absolute inset-0 bg-black z-20 flex items-center justify-center">
      <video
        ref={el => (videoRefs.current[index] = el)}
        src={edit.videoUrl}
        className="w-full h-full object-contain md:object-cover rounded-2xl"
        controls
        playsInline
        autoPlay
        controlsList="nodownload"
        poster={thumbnails[index]}
        onContextMenu={e => e.preventDefault()}
      />
      <button
        onClick={handleCloseVideo}
        className="absolute top-3 right-3 md:top-4 md:right-4 z-30 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>
    </div>
  ) : (
    <>
      {/* Thumbnail */}
      {thumbnails[index] && (
        <img
          src={thumbnails[index]}
          alt={`Thumbnail for ${edit.title}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Gradient overlay (no pointer events) */}
      <div
        className={`absolute inset-0 opacity-80 bg-gradient-to-br ${edit.color} mix-blend-overlay group-hover:opacity-90 transition-opacity duration-500 pointer-events-none`}
      ></div>

      {/* Dark overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-90 transition-all duration-500 pointer-events-none"></div>

      {/* ✅ Play button container captures all clicks */}
      <div
        className="absolute inset-0 flex items-center justify-center z-20"
        onClick={() => handlePlayVideo(edit.id)}
      >
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/25 transition-all duration-300"
        >
          <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="white" />
        </motion.div>
      </div>

      {/* Text (no pointer blocking) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 pointer-events-none">
        <p className="text-sm md:text-base text-cyan-300 mb-1 font-semibold tracking-wider">
          {edit.category}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          {edit.title}
        </h3>
      </div>

      {/* Subtle border glow */}
      <div
        className={`absolute inset-0 ring-2 ring-white/10 rounded-2xl transition-all duration-500 group-hover:ring-white/40 pointer-events-none`}
      ></div>
    </>
  )}
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}

