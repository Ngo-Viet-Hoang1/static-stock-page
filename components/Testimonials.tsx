import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { TESTIMONIALS } from "../constants";

const Testimonials: React.FC = () => {
  // Countdown Timer State (12 hours 45 minutes in seconds)
  const INITIAL_TIME = 12 * 3600 + 45 * 60; // 45900 seconds
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return INITIAL_TIME; // Reset when reaches 0
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate hours, minutes, seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Format with leading zeros
  const formatTime = (value: number) => String(value).padStart(2, "0");

  // Duplicate the testimonials to ensure seamless loop
  // Multiply by 4 to ensure we have enough width for screens to scroll 50% without gaps
  const MARQUEE_ITEMS = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  return (
    <section
      id="hoc-vien"
      className="py-24 bg-slate-50 dark:bg-dark-900 border-t border-slate-100 dark:border-white/5 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Học Viên{" "}
              <span className="text-yellow-600 dark:text-gold-400">
                Nói Gì?
              </span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400">
              Kết quả thực tế từ những người đã áp dụng phương pháp.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-gold-500 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden -mx-6 md:mx-0 py-8 mask-linear-gradient">
          {/* Gradient Masks for smooth entry/exit */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 dark:from-dark-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 dark:from-dark-900 to-transparent z-20 pointer-events-none"></div>

          {/* 
              CSS Animation for continuous looping.
              We move the track to -50% of its width.
              Because the content is duplicated (Symmetric halves), 
              the frame at -50% looks exactly identical to 0%, creating a seamless loop.
           */}
          <div
            className="flex gap-8 w-max"
            style={{
              animation: "marquee 60s linear infinite",
            }}
          >
            {MARQUEE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[400px] flex-shrink-0 group relative bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/90 dark:hover:bg-white/10 hover:scale-[1.02] shadow-sm hover:shadow-xl dark:shadow-none"
              >
                {/* Shine Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-6 text-6xl text-slate-200 dark:text-white/5 font-serif font-bold pointer-events-none group-hover:text-gold-500/20 transition-colors">
                  "
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-1 bg-white dark:bg-white/10 rounded-full border border-slate-100 dark:border-white/5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wide">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-gray-300 italic mb-6 relative z-10 leading-relaxed text-sm">
                  "{item.content}"
                </p>

                <div className="inline-block px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-bold rounded-lg border border-green-500/20 backdrop-blur-sm">
                  {item.profit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Style for Marquee Animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        {/* === UPGRADED CTA SECTION === */}
        <div className="mt-24 relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group isolate transform transition-all hover:shadow-gold-500/20">
          {/* 1. Animated Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-gold-500 to-yellow-500 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 animate-gradient-x bg-[length:200%_200%]"></div>

          {/* Animated Overlay Blobs */}
          <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-white/20 dark:bg-blue-500/20 rounded-full blur-[100px] animate-float opacity-70 mix-blend-overlay"></div>
          <div
            className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[150%] bg-yellow-300/30 dark:bg-gold-500/20 rounded-full blur-[100px] animate-float opacity-70 mix-blend-overlay"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Noise Texture for Texture Depth */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>

          {/* 2. Glass Container Content */}
          <div className="relative z-10 p-10 md:p-20 flex flex-col items-center text-center">
            {/* Floating Badge */}
            <div
              className="mb-8 inline-flex items-center gap-2 bg-white/90 dark:bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50 shadow-lg animate-float"
              style={{ animationDuration: "4s" }}
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                Ưu đãi độc quyền K52
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-white dark:text-white mb-6 leading-tight drop-shadow-lg tracking-tight">
              Đừng Để Tiền <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                Nằm Im Trong Tài Khoản
              </span>
            </h3>

            <p className="text-white/90 dark:text-gray-200 font-medium text-lg mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Tham gia khóa học ngay hôm nay để nhận bộ công cụ lọc cổ phiếu trị
              giá{" "}
              <span className="font-bold text-white border-b-2 border-white/50">
                5.000.000đ
              </span>{" "}
              và vé mời tham gia Room VIP trọn đời.
            </p>

            {/* 3. Modern Countdown & Action */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full justify-center">
              {/* Countdown Timer */}
              <div className="flex gap-4">
                {[
                  { val: formatTime(hours), label: "Giờ" },
                  { val: formatTime(minutes), label: "Phút" },
                  { val: formatTime(seconds), label: "Giây" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                      <span className="text-3xl md:text-4xl font-mono font-bold text-white drop-shadow-md transition-all duration-300">
                        {item.val}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-24 bg-white/30"></div>

              {/* Action Button */}
              <div className="flex flex-col gap-4">
                <button className="group relative bg-white dark:bg-white text-slate-900 font-extrabold py-5 px-10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  <span className="flex items-center gap-3 relative z-10">
                    Đăng Ký Tư Vấn Ngay
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <p className="text-white/80 text-xs font-medium flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Bảo mật thông tin 100%
                </p>
              </div>
            </div>
          </div>

          {/* Floating Decor Items */}
          <div
            className="absolute top-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl rotate-12 animate-float hidden lg:flex items-center justify-center shadow-xl"
            style={{ animationDelay: "1s" }}
          >
            <span className="text-2xl font-bold text-white">-40%</span>
          </div>
          <div
            className="absolute bottom-10 left-10 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-float hidden lg:block shadow-xl"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
