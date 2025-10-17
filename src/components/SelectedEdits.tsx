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
      {/* Abstract animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 relative inline-block">
              Selected Long Edits
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" 
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our finest work, handpicked for you
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {edits.map((edit, index) => (
            <motion.div
              key={edit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onHoverStart={() => setHoveredCard(edit.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer transform-gpu"
              style={{
                boxShadow: hoveredCard === edit.id ? 
                  `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px 0px rgba(${edit.color.includes('cyan') ? '0,200,255' : edit.color.includes('magenta') ? '255,0,255' : edit.color.includes('teal') ? '0,255,200' : '255,100,0'}, 0.3)` : 
                  '0 10px 30px -15px rgba(0,0,0,0.5)'
              }}
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
                  <motion.button 
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6 text-white hover:text-black" />
                  </motion.button>
                </div>
              ) : (
                <>
                  {/* Video Thumbnail with scale effect on hover */}
                  {thumbnails[index] && (
                    <motion.div 
                      className="absolute inset-0 z-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2 }}
                    >
                      <img 
                        src={thumbnails[index]} 
                        alt={`Thumbnail for ${edit.title}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                  
                  {/* Hidden video for preloading */}
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={edit.videoUrl}
                    className="hidden"
                    preload="metadata"
                    playsInline
                  />
                  
                  {/* Enhanced gradient overlay with color accent based on category */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90`}
                    ></div>
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${edit.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>
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
                        scale: 1.15,
                        boxShadow: '0 0 25px 5px rgba(255,255,255,0.3)'
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-tr ${edit.color} flex items-center justify-center border border-white/30 backdrop-blur-md shadow-lg`}
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
                        className={`text-sm bg-gradient-to-r ${edit.color} inline-block text-transparent bg-clip-text mb-2 font-semibold px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {edit.category}
                      </motion.p>
                      <motion.h3 
                        className="text-3xl font-bold text-white mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {edit.title}
                      </motion.h3>
                    </motion.div>
                  </div>

                  {/* Enhanced glowing border effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0.5 }}
                    animate={{ 
                      opacity: hoveredCard === edit.id ? 0.8 : 0.3,
                      boxShadow: hoveredCard === edit.id ? 
                        `inset 0 0 0 2px rgba(255,255,255,0.4), 0 0 15px 0px rgba(${edit.color.includes('cyan') ? '0,200,255' : edit.color.includes('magenta') ? '255,0,255' : edit.color.includes('teal') ? '0,255,200' : '255,100,0'}, 0.5)` : 
                        'inset 0 0 0 1px rgba(255,255,255,0.2)'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
