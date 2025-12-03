import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Brain,
  Code,
  Layers,
  Zap,
} from "lucide-react";
import React from "react";
import { FEATURES } from "../constants";

const CourseDetails: React.FC = () => {
  return (
    <section
      id="tinh-nang"
      className="py-24 bg-slate-50 dark:bg-dark-950 relative transition-colors duration-300 overflow-hidden"
    >
      {/* === BACKGROUND ELEMENTS === */}
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Ambient Glows - Brightened for Light Mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold-400/20 dark:bg-gold-500/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* === SECTION HEADER === */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 mb-6 backdrop-blur-md"
          >
            <Zap
              size={14}
              className="text-gold-600 dark:text-gold-500 fill-gold-600 dark:fill-gold-500"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-gray-300">
              Công nghệ hỗ trợ độc quyền
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Tại Sao Chọn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-yellow-700 dark:from-gold-300 dark:to-yellow-500 relative">
              AHKT?
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-gold-500/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Hệ thống giao dịch được thiết kế để loại bỏ cảm xúc, tối ưu hóa lợi
            nhuận và giúp bạn nhìn thấy dòng tiền "Cá Mập" trên thị trường.
          </motion.p>
        </div>

        {/* === FEATURE GRID (Holographic Cards) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 perspective-1000">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 50 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative h-full"
            >
              {/* Card Container - Light Mode: Solid White with Shadow, Dark Mode: Glass */}
              <div className="relative h-full bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-[2rem] overflow-hidden transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_20px_50px_-15px_rgba(234,179,8,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)] hover:border-gold-400/50 dark:hover:border-gold-500/30">
                {/* Dynamic Gradient Border Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent"></div>
                </div>

                {/* Watermark Number (01, 02...) - Better visibility in Light Mode */}
                <div className="absolute -top-6 -right-6 text-[120px] font-black text-slate-100 dark:text-white/[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-gold-500/[0.05] dark:group-hover:text-gold-500/[0.05]">
                  0{idx + 1}
                </div>

                {/* Icon Orb */}
                <div className="relative z-10 w-16 h-16 mb-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm dark:shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out group-hover:bg-white dark:group-hover:bg-white/10">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gold-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-slate-600 dark:text-gold-400 group-hover:text-gold-600 dark:group-hover:text-white transition-colors">
                    {React.cloneElement(
                      feature.icon as React.ReactElement<any>,
                      { size: 32, strokeWidth: 1.5 }
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-slate-600 dark:text-gray-400 text-sm leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4 group-hover:border-gold-500/20 transition-colors font-medium">
                  {feature.description}
                </p>

                {/* Bottom Shine Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-400 to-yellow-600 transition-all duration-700 group-hover:w-full opacity-80"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === GIF Market Visual Section (HUD Enhanced - Light Mode Optimized) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[450px] mb-24 rounded-3xl p-[2px] overflow-hidden group"
        >
          {/* 1. Rotating Gradient Border - Works for both modes */}
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,#EAB308_90deg,transparent_180deg)] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Container Background - Light Mode: White/Clean | Dark Mode: Slate-900/Sci-fi */}
          <div className="relative h-full w-full bg-white dark:bg-slate-900 rounded-[22px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl transition-colors duration-300">
            {/* 2. Background GIF & Optimization */}
            <div className="absolute inset-0">
              <img
                src="/static-stock-page/giphy.gif"
                alt="Market Data"
                className="w-full h-full object-cover 
                    opacity-10 mix-blend-multiply dark:opacity-30 dark:mix-blend-luminosity 
                    scale-105 transition-all duration-500"
              />

              {/* Vignette - Softer on Light Mode */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>
            </div>

            {/* 3. HUD Elements - Colors adjusted for contrast */}
            {/* Scanning Laser */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-600/30 dark:bg-gold-500/50 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-20 animate-scan"></div>

            {/* Corner Brackets - Darker Gold for Light Mode */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold-600/60 dark:border-gold-500/50 rounded-tl-lg z-20"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold-600/60 dark:border-gold-500/50 rounded-tr-lg z-20"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gold-600/60 dark:border-gold-500/50 rounded-bl-lg z-20"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold-600/60 dark:border-gold-500/50 rounded-br-lg z-20"></div>

            {/* Grid Overlay - Dark grid lines for Light Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none"></div>

            {/* 4. Live Feed Indicators */}
            <div className="absolute top-8 left-10 flex items-center gap-3 z-30">
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute w-full h-full bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full"></div>
              </div>
              <span className="font-mono text-red-600 dark:text-red-500 text-xs font-bold tracking-[0.2em] animate-pulse-fast">
                LIVE SYSTEM
              </span>
              <span className="font-mono text-slate-500 dark:text-gold-500/50 text-xs ml-4 hidden sm:inline-block">
                SYS.STATUS:{" "}
                <span className="text-gold-700 dark:text-gold-400 font-bold">
                  OPTIMAL
                </span>
              </span>
            </div>

            <div className="absolute top-8 right-10 z-30 font-mono text-xs text-slate-500 dark:text-gold-500/70 text-right hidden sm:block">
              <div className="mb-1 font-semibold">CPU: 12%</div>
              <div className="font-semibold">RAM: 4.2GB</div>
            </div>

            {/* Main Content (Centered) - More transparent to see background */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
              <div className="p-8 md:p-10 bg-white/40 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-white/10 shadow-xl dark:shadow-2xl max-w-2xl text-center transform hover:scale-105 transition-all duration-500 relative overflow-hidden group/card">
                {/* Card Scanline */}
                <div
                  className="absolute top-0 left-0 w-full h-[1px] bg-slate-900/10 dark:bg-white/20 animate-scan"
                  style={{ animationDuration: "2s" }}
                ></div>

                <div className="flex items-center justify-center gap-3 mb-4 text-gold-600 dark:text-gold-400">
                  <BarChart2 className="w-8 h-8 drop-shadow-sm" />
                  <span className="text-sm font-bold tracking-widest uppercase border-b border-gold-600/30 dark:border-gold-500/30 pb-1 text-slate-900 dark:text-gold-400">
                    Visual Trading Engine
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Cảm Nhận <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-yellow-500 to-gold-600 dark:from-gold-400 dark:via-yellow-200 dark:to-gold-400 animate-pulse drop-shadow-sm">
                    Nhịp Đập Thị Trường
                  </span>
                </h3>
                <p className="text-slate-800 dark:text-gray-200 text-sm md:text-base font-bold dark:font-medium tracking-wide drop-shadow-sm">
                  Phát hiện dòng tiền "Cá Mập" (Smart Money) theo thời gian thực
                  với hệ thống cảnh báo đa điểm chạm.
                </p>
              </div>
            </div>

            {/* 5. Bottom Ticker - Clean Light / Dark Mode Styles */}
            <div className="absolute bottom-0 w-full bg-slate-100/90 dark:bg-black/80 backdrop-blur border-t border-slate-200 dark:border-gold-500/20 py-2 z-30 overflow-hidden flex items-center font-mono text-xs">
              <div className="flex animate-marquee whitespace-nowrap gap-12 text-slate-700 dark:text-gold-500/80 px-4 font-bold dark:font-normal">
                <span>
                  BTC/USD{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 64,230.50
                  </span>
                </span>
                <span>
                  ETH/USD{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 3,450.20
                  </span>
                </span>
                <span>
                  GOLD{" "}
                  <span className="text-red-600 dark:text-red-400">
                    ▼ 2,150.00
                  </span>
                </span>
                <span>
                  USDT{" "}
                  <span className="text-slate-500 dark:text-slate-400">
                    ≈ 1.00
                  </span>
                </span>
                <span>
                  VNI{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 1,280.10
                  </span>
                </span>
                <span>
                  HPG{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 30,500
                  </span>
                </span>
                {/* Duplicate for loop */}
                <span>
                  BTC/USD{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 64,230.50
                  </span>
                </span>
                <span>
                  ETH/USD{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 3,450.20
                  </span>
                </span>
                <span>
                  GOLD{" "}
                  <span className="text-red-600 dark:text-red-400">
                    ▼ 2,150.00
                  </span>
                </span>
                <span>
                  USDT{" "}
                  <span className="text-slate-500 dark:text-slate-400">
                    ≈ 1.00
                  </span>
                </span>
                <span>
                  VNI{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 1,280.10
                  </span>
                </span>
                <span>
                  HPG{" "}
                  <span className="text-green-600 dark:text-green-400">
                    ▲ 30,500
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === Content Breakdown: Interactive Timeline & 3D Image === */}
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* LEFT: Interactive Learning Path (Timeline) */}
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-10 leading-tight">
              Lộ Trình Học Tập <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Từ Zero Đến Hero
              </span>
            </h3>

            <div className="relative pl-4">
              {/* Timeline Connector */}
              <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-transparent"></div>

              <div className="space-y-8">
                {[
                  {
                    title: "Tư duy đầu tư & Quản lý vốn",
                    desc: "Mindset của Top 5% nhà đầu tư thành công",
                    icon: Brain,
                  },
                  {
                    title: "Phân tích kỹ thuật nâng cao",
                    desc: "Price Action, Volume & Đọc nến chuyên sâu",
                    icon: BarChart2,
                  },
                  {
                    title: "Smart Money Concept",
                    desc: "Đọc vị dấu chân Cá Mập & Dòng tiền lớn",
                    icon: Zap,
                  },
                  {
                    title: "Tâm lý & Hệ thống Trading",
                    desc: "Xây dựng kỷ luật thép & Setup hiệu quả",
                    icon: Layers,
                  },
                  {
                    title: "Bonus: Code Amibroker",
                    desc: "Bộ lọc cổ phiếu tự động độc quyền",
                    icon: Code,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative pl-12 group"
                  >
                    {/* Node */}
                    <div className="absolute left-[19px] top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 z-10 shadow-[0_0_0_4px_rgba(59,130,246,0.1)] dark:shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"></div>

                    {/* Card */}
                    <div className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10 hover:border-blue-400/50 dark:hover:border-blue-500/30 group-hover:translate-x-2">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:rotate-6 transition-transform">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button className="mt-12 ml-16 px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2 group shadow-lg shadow-slate-900/20 dark:shadow-white/10">
              Xem chi tiết giáo trình
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* RIGHT: 3D Image Container */}
          <div className="lg:w-1/2 flex items-center">
            <div className="relative w-full h-[600px] perspective-1000 group">
              {/* 1. Back Glow */}
              <div className="absolute inset-10 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[80px] rounded-full animate-pulse-slow"></div>

              {/* 2. Main Glass Card - Tilts on Hover */}
              <div className="absolute inset-0 p-3 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-[2.5rem] shadow-2xl transition-transform duration-700 ease-out transform group-hover:rotate-y-6 group-hover:rotate-x-3">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src="/static-stock-page/course.png"
                    alt="Trading Setup"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Floating Element 1: Documents */}
                <div className="absolute top-10 right-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg flex items-center gap-3 transform translate-z-20 group-hover:translate-y-[-10px] transition-transform duration-500 delay-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-gray-400 font-bold uppercase">
                      Tài liệu
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Slide + Video 4K
                    </p>
                  </div>
                </div>

                {/* Floating Element 2: Success Rate */}
                <div className="absolute bottom-10 left-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-lg transform translate-z-30 group-hover:translate-y-[-10px] transition-transform duration-500 delay-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase">
                      Win Rate
                    </span>
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">
                    78<span className="text-green-500 text-lg">%</span>
                  </div>
                  <div className="w-24 h-1 bg-slate-200 dark:bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div className="w-[78%] h-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
