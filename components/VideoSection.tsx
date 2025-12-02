import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Trải Nghiệm{" "}
          <span className="text-yellow-600 dark:text-gold-400">Thực Tế</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Xem giới thiệu ngắn về khóa học và phương pháp đầu tư độc quyền của
          chúng tôi.
        </p>

        {/* Glass Frame for Video (Bezel) */}
        <div className="relative max-w-5xl mx-auto p-4 bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          <div className="relative rounded-2xl overflow-hidden shadow-inner bg-black group">
            <video
              ref={videoRef}
              className="w-full h-auto object-cover bg-black aspect-video"
              poster="https://picsum.photos/1200/675?blur=2"
              playsInline
              loop
              crossOrigin="anonymous"
            >
              {/* <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" /> */}
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
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <button
                onClick={togglePlay}
                className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                {isPlaying ? (
                  <Pause className="text-white fill-current" size={32} />
                ) : (
                  <Play className="text-white fill-current ml-2" size={32} />
                )}
              </button>
            </div>

            <div className="absolute bottom-6 right-6 z-10">
              <button
                onClick={toggleMute}
                className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Scanline overlay for tech feel */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none"></div>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500 dark:text-gray-500 italic">
          * Video có phụ đề tiếng Việt. Bấm vào icon âm thanh để nghe
          Voice-over.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
