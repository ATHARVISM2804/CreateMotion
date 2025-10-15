import { motion } from 'framer-motion';
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
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500 rounded-full filter blur-[120px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Shortform Showcase
          </h2>
          <p className="text-xl text-gray-400">Viral-worthy content that stops the scroll</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        </div>
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
  const isPlaying = activeVideo === reel.id;
  
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer"
      onClick={togglePlayback}
    >
      {reel.video ? (
        <>
          {/* Thumbnail/poster image from video */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black">
              {thumbnail && (
                <img 
                  src={thumbnail} 
                  alt={reel.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-cyan-400 animate-spin"></div>
                </div>
              )}
            </div>
          )}
          
          <video
            id={`video-${reel.id}`}
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            poster={thumbnail}
            onLoadedMetadata={() => {
              // Once video metadata is loaded, we can set the current time to 0
              // to ensure it starts from the beginning when played
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
        <div className={`absolute inset-0 bg-gradient-to-br ${reel.color}`}></div>
      )}

      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/30 group-hover:bg-black/10 transition-all duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <span className="text-sm text-white font-semibold">{reel.views}</span>
      </div>

      {/* Control buttons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </div>
      </div>

      {/* Sound toggle button */}
      <div 
        className="absolute bottom-20 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
        onClick={toggleMute}
      >
        <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="relative text-xl font-bold text-white">{reel.title}</h3>
        </div>
      </div>

      <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl group-hover:ring-2 group-hover:ring-cyan-400/50 transition-all duration-500"></div>
    </motion.div>
  );
}
