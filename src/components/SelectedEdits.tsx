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
    color: 'from-magenta-500 to-purple-600',
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
  
  // Generate thumbnails from videos
  useEffect(() => {
    edits.forEach((edit, index) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = edit.videoUrl;
      video.muted = true; // Muted for autoplay in thumbnail generation
      video.preload = 'metadata';
      
      // Listen for when enough data is loaded to generate thumbnail
      video.addEventListener('loadeddata', () => {
        video.currentTime = 1; // Seek to 1 second to avoid black frames
      });
      
      video.addEventListener('seeked', () => {
        // Create a canvas to capture the video frame
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          // Convert canvas to data URL
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
    // Set the playing video ID first
    setPlayingVideo(id);
    
    // Use a setTimeout to ensure the DOM has updated with the video element
    setTimeout(() => {
      // Get the index in the array (id - 1)
      const index = id - 1;
      const videoElement = videoRefs.current[index];
      
      if (videoElement) {
        // Ensure video has the correct properties
        videoElement.muted = false;
        videoElement.controls = true;
        videoElement.playsInline = true;
        videoElement.currentTime = 0;
        
        // Focus on the video element
        videoElement.focus();
        
        // Try to play the video
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video playback started successfully");
            })
            .catch(error => {
              console.error("Error playing video:", error);
              
              // For browsers that require user interaction
              videoElement.controls = true;
              console.log("Manual play required - controls enabled");
            });
        }
      } else {
        console.error("Video element not found");
      }
    }, 100); // Short delay to ensure DOM update
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
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Selected Long Edits
          </h2>
          <p className="text-xl text-gray-400">Our finest work, handpicked for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {edits.map((edit, index) => (
            <motion.div
              key={edit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredCard(edit.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative aspect-video rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 transform ${hoveredCard === edit.id ? 'z-20' : 'z-10'}`}
            >
              {playingVideo === edit.id ? (
                <div className="absolute inset-0 z-20 bg-black">
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={edit.videoUrl}
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    poster={thumbnails[index]}
                    controlsList="nodownload"
                    onContextMenu={e => e.preventDefault()}
                    autoPlay
                  />
                  <button 
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <X className="w-6 h-6 text-white hover:text-black" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Video Thumbnail */}
                  {thumbnails[index] && (
                    <div className="absolute inset-0 z-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
                      <img 
                        src={thumbnails[index]} 
                        alt={`Thumbnail for ${edit.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Hidden video for preloading */}
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={edit.videoUrl}
                    className="hidden"
                    preload="metadata"
                    playsInline
                  />
                  
                  {/* Enhanced gradient overlay using the edit's color */}
                  <div className={`absolute inset-0 opacity-80 bg-gradient-to-br ${edit.color} mix-blend-overlay transition-opacity duration-500 group-hover:opacity-90`}></div>
                  
                  {/* Additional dark gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-80 transition-all duration-500"></div>
                  
                  {/* Animated glow effect on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    ${hoveredCard === edit.id ? 'bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse' : ''}`}></div>
                </>
              )}

              {playingVideo !== edit.id && (
                <>
                  <div 
                    className="absolute inset-0 flex items-center justify-center z-10"
                    onClick={() => handlePlayVideo(edit.id)}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)"
                      }}
                      animate={{
                        boxShadow: hoveredCard === edit.id ? 
                          ["0 0 10px rgba(255, 255, 255, 0.3)", "0 0 20px rgba(255, 255, 255, 0.5)", "0 0 10px rgba(255, 255, 255, 0.3)"] : 
                          "0 0 0px rgba(255, 255, 255, 0)"
                      }}
                      transition={{ 
                        duration: 0.3,
                        boxShadow: { duration: 2, repeat: Infinity }
                      }}
                      className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.p 
                        animate={{ x: hoveredCard === edit.id ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-cyan-300 mb-2 font-semibold tracking-wider"
                      >
                        {edit.category}
                      </motion.p>
                      <motion.h3 
                        animate={{ x: hoveredCard === edit.id ? 8 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-3xl font-bold text-white drop-shadow-lg"
                      >
                        {edit.title}
                      </motion.h3>
                    </motion.div>
                  </div>

                  {/* Enhanced border glow effect */}
                  <div className={`absolute inset-0 ring-2 ring-white/20 rounded-3xl transition-all duration-500
                    group-hover:ring-offset-2 group-hover:ring-offset-black/50 group-hover:ring-white/50
                    ${hoveredCard === edit.id ? 'shadow-[0_0_15px_rgba(255,255,255,0.3)]' : ''}`}></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
