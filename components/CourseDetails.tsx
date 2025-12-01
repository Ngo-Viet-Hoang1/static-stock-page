import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import { CheckCircle2, BarChart2 } from 'lucide-react';

const CourseDetails: React.FC = () => {
  return (
    <section id="tinh-nang" className="py-24 bg-slate-50 dark:bg-dark-950 relative transition-colors duration-300">

      {/* Background Gradients for Glass Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-500/10 dark:bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tại Sao Chọn <span className="text-yellow-600 dark:text-gold-400">AHKT?</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Không chỉ là lý thuyết suông. Chúng tôi cung cấp công cụ, tư duy và cộng đồng để bạn chiến thắng bền vững.
          </p>
        </div>

        {/* Feature Grid with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/60 dark:border-white/10 p-8 rounded-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-lg dark:shadow-none overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 w-14 h-14 bg-white dark:bg-dark-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-100 dark:border-white/10 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="relative z-10 text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* GIF Market Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-80 mb-24 rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 group"
        >
          {/* GIF Background - Abstract Stock Chart */}
          <div className="absolute inset-0 bg-black">
            <img
              src="giphy.gif"
              alt="Stock Market Data Animation"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
            />
          </div>

          {/* Glass Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <div className="p-6 md:px-10 md:py-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg max-w-3xl text-center transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center justify-center gap-2 mb-2 text-gold-400">
                <BarChart2 className="w-6 h-6 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">Live Market Data</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                Cảm Nhận <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">Nhịp Đập Thị Trường</span>
              </h3>
              <p className="text-gray-200 text-sm md:text-base font-light drop-shadow-md">
                Hệ thống Visual Trading giúp bạn nhìn thấy những gì người khác bỏ lỡ.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Breakdown with Side Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Lộ Trình Học Tập <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Từ Zero Đến Hero</span>
            </h3>

            <div className="space-y-6">
              {[
                "Module 1: Tư duy đầu tư & Quản lý vốn chuyên nghiệp",
                "Module 2: Phân tích kỹ thuật nâng cao (Price Action + Volume)",
                "Module 3: Đọc vị dòng tiền Cá mập (Smart Money Concept)",
                "Module 4: Tâm lý giao dịch & Xây dựng hệ thống Trading",
                "Bonus: Code Amibroker lọc cổ phiếu tự động"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 dark:group-hover:bg-green-500/30 transition-colors">
                    <CheckCircle2 className="text-green-600 dark:text-green-400 w-4 h-4" />
                  </div>
                  <span className="text-slate-700 dark:text-gray-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-white/10 transition-colors flex items-center gap-2 group">
              Xem chi tiết giáo trình
              <span className="group-hover:translate-x-1 transition-transform text-yellow-600 dark:text-gold-400">→</span>
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-[60px] rounded-full"></div>

            {/* Glass Frame for Image */}
            <div className="relative z-10 p-2 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl shadow-2xl">
              <img
                src="https://th.bing.com/th/id/OIG2.nZG6azf2ipXWte8oDMg5?pid=ImgGn"
                alt="Classroom"
                className="rounded-2xl w-full grayscale hover:grayscale-0 transition-all duration-500 object-cover"
              />
            </div>

            {/* Floating Glass Badge */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-yellow-600 rounded-full flex items-center justify-center text-dark-950 font-bold shadow-lg">
                50+
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">Video</div>
                <div className="text-xs text-slate-500 dark:text-gray-400 uppercase font-semibold tracking-wider">Bài Giảng Chất Lượng</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseDetails;
