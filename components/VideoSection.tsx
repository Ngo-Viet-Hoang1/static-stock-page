import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { VIDEO_SUBTITLES } from "../constants";

// Helper to create a blob URL for VTT content
const createVTTUrl = () => {
  let vttContent = "WEBVTT\n\n";
  VIDEO_SUBTITLES.forEach((cue, index) => {
    const start = new Date(cue.startTime * 1000).toISOString().substr(14, 9);
    const end = new Date(cue.endTime * 1000).toISOString().substr(14, 9);
    vttContent += `${index + 1}\n${start} --> ${end}\n${cue.text}\n\n`;
  });
  const blob = new Blob([vttContent], { type: "text/vtt" });
  return URL.createObjectURL(blob);
};

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [trackUrl, setTrackUrl] = useState("");

  useEffect(() => {
    const url = createVTTUrl();
    setTrackUrl(url);
    return () => URL.revokeObjectURL(url);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-slate-50/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none"></div>

      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/20 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Trải Nghiệm{" "}
          <span className="text-yellow-600 dark:text-gold-400">Thực Tế</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Xem giới thiệu ngắn về khóa học và phương pháp đầu tư độc quyền của
          chúng tôi.
        </p>

        {/* === PREMIUM VIDEO CONTAINER === */}
        <div className="relative max-w-5xl mx-auto group">
          {/* 1. Ambient Glow Behind (Static) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-yellow-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          {/* 2. Rotating Gradient Border (Animated) */}
          <div className="absolute -inset-[2px] rounded-[2rem] overflow-hidden">
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,#EAB308_90deg,transparent_180deg)] animate-spin-slow opacity-70 dark:opacity-100"></div>
          </div>

          {/* 3. Main Glass Frame */}
          <div className="relative p-2 bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
            <div className="relative rounded-[1.5rem] overflow-hidden bg-black group/video aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover bg-black"
                poster="https://picsum.photos/1200/675?blur=2"
                playsInline
                loop
                crossOrigin="anonymous"
              >
                <source src="/static-stock-page/video.mp4" type="video/mp4" />

                {trackUrl && (
                  <track
                    label="Vietnamese"
                    kind="subtitles"
                    srcLang="vi"
                    src={trackUrl}
                    default
                  />
                )}
              </video>

              {/* Custom Controls Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                  isPlaying
                    ? "opacity-0 group-hover/video:opacity-100"
                    : "opacity-100"
                }`}
              >
                {/* Play Button with Pulse Effect */}
                <button onClick={togglePlay} className="relative group/btn">
                  <div className="absolute inset-0 bg-gold-500 rounded-full blur opacity-0 group-hover/btn:opacity-50 animate-pulse transition-opacity"></div>
                  <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20 shadow-2xl">
                    {isPlaying ? (
                      <Pause className="text-white fill-current" size={32} />
                    ) : (
                      <Play
                        className="text-white fill-current ml-2"
                        size={32}
                      />
                    )}
                  </div>
                </button>
              </div>

              {/* Bottom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-end gap-4 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button className="p-2 hover:bg-white/20 rounded-full text-white transition-colors">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-500 dark:text-gray-500 italic flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Video có phụ đề tiếng Việt & Âm thanh vòm Dolby
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
