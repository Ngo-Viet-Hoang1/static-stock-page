import React from 'react';
import { TESTIMONIALS } from '../constants';

const Countdown: React.FC<{ initialTime?: number }> = ({ initialTime = 36500 }) => {
  const [time, setTime] = React.useState<number>(initialTime);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev <= 1 ? initialTime : prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [initialTime])

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return <span>{hours}:{minutes}:{seconds}</span>
}

const Testimonials: React.FC = () => {


  return (
    <section id="hoc-vien" className="py-24 bg-slate-50 dark:bg-dark-900 border-t border-slate-100 dark:border-white/5 transition-colors duration-300 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Học Viên <span className="text-yellow-600 dark:text-gold-400">Nói Gì?</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400">Kết quả thực tế từ những người đã áp dụng phương pháp.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-gold-500 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 p-8 rounded-3xl hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none"
            >
              {/* Shine Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-6 text-6xl text-slate-200 dark:text-white/5 font-serif font-bold pointer-events-none group-hover:text-gold-500/20 transition-colors">"</div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-1 bg-white dark:bg-white/10 rounded-full border border-slate-100 dark:border-white/5">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-gray-300 italic mb-6 relative z-10 leading-relaxed">"{item.content}"</p>

              <div className="inline-block px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-bold rounded-lg border border-green-500/20 backdrop-blur-sm">
                {item.profit}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Glassmorphism Style */}
        <div className="mt-24 relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-gold-600 dark:to-yellow-600 opacity-90"></div>

          {/* Glass Overlay on CTA */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          {/* Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

          <div className="relative z-10 p-12 md:p-20 text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white dark:text-dark-950 mb-6 drop-shadow-md">
              Đừng Để Tiền Nằm Im Trong Tài Khoản
            </h3>
            <p className="text-white/90 dark:text-dark-900 font-medium text-lg mb-10 max-w-2xl mx-auto">
              Tham gia khóa học ngay hôm nay để nhận ưu đãi 40% và bộ công cụ lọc cổ phiếu trị giá 5.000.000đ.
            </p>

            <button className="bg-white/90 dark:bg-dark-950/90 backdrop-blur text-slate-900 dark:text-white font-bold py-5 px-12 rounded-2xl hover:scale-105 transition-transform shadow-xl border border-white/50">
              Đăng Ký Tư Vấn Miễn Phí
            </button>

            <p className="mt-6 text-white/80 dark:text-dark-900/70 text-sm font-semibold tracking-wider">
              ƯU ĐÃI KẾT THÚC SAU: <span className="font-mono text-white dark:text-dark-950"><Countdown /></span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
