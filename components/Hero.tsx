import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import { ArrowRight, PlayCircle, TrendingUp, Wallet, MoreHorizontal, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-dark-950 transition-colors duration-300" id="home">
      {/* 3D Background */}
      <ThreeBackground isDark={isDark} />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100/80 dark:bg-gold-400/10 border border-yellow-200 dark:border-gold-400/20 mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-yellow-700 dark:text-gold-400 text-xs font-semibold uppercase tracking-wider">Khóa học Premium K52 đang mở</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-gray-200 dark:to-gray-400 drop-shadow-sm">
            Làm Chủ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-gold-300 dark:to-yellow-600 filter drop-shadow-sm">Thị Trường</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
            Hệ thống giao dịch AHKT giúp bạn thấu hiểu dòng tiền, tối ưu hóa lợi nhuận và kiến tạo tự do tài chính bền vững.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="relative overflow-hidden group flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-yellow-600 text-white dark:text-dark-950 font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:-translate-y-1">
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
              <span className="relative z-10">Đăng Ký Ngay</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Glass Button with Dynamic Ripple/Shimmer */}
            <button className="relative overflow-hidden flex items-center justify-center gap-2 
              bg-white/40 dark:bg-white/5 
              border border-slate-200/50 dark:border-white/10 
              font-semibold py-4 px-8 rounded-xl backdrop-blur-md 
              transition-all duration-300 
              shadow-lg hover:shadow-gold-500/10 
              hover:-translate-y-1 group z-10">
              
              {/* Dynamic Ripple Background: Slides in from bottom-left */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-white/30 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent translate-y-full scale-150 group-hover:translate-y-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-xl"></div>
              
              {/* Sliding Shine Effect */}
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent skew-x-12 z-0 pointer-events-none delay-100" />

              {/* Icon */}
              <PlayCircle size={20} className="relative z-10 text-yellow-600 dark:text-gold-400 group-hover:scale-110 group-hover:text-yellow-500 dark:group-hover:text-yellow-200 transition-all duration-300" />
              
              {/* Text */}
              <span className="relative z-10 text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300">Xem Demo</span>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-4">
               {[1, 2, 3, 4].map((i) => (
                 <img key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-800 shadow-md" src={`https://picsum.photos/50/50?random=${i+10}`} alt="Student" />
               ))}
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-lg">2,500+</p>
              <p className="text-slate-500 dark:text-gray-400 text-sm">Học viên tin tưởng</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual - Ultra Premium Glassmorphism Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
          className="hidden lg:block relative perspective-1000 h-[500px] w-full max-w-[500px] mx-auto"
        >
          {/* Layer 1: The "Black Card" floating behind - Decorative Depth */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotateZ: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -right-12 w-64 h-40 bg-gradient-to-br from-slate-800 to-black rounded-2xl border border-white/10 shadow-2xl z-0 transform rotate-12 opacity-80 backdrop-blur-sm overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <div className="p-6 flex flex-col justify-between h-full text-white/50">
                <div className="flex justify-between items-start">
                   <div className="w-8 h-5 bg-yellow-600/50 rounded flex gap-1 items-center px-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                   </div>
                   <Wallet className="w-6 h-6 text-white/30" />
                </div>
                <div className="font-mono text-sm tracking-widest">**** **** **** 8899</div>
             </div>
          </motion.div>

          {/* Layer 2: Main Glass Dashboard */}
          <div className="absolute inset-0 z-20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-3xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden">
            
            {/* Top Gloss Reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-3xl"></div>
            
            {/* Header Section */}
            <div className="relative z-10 flex justify-between items-start mb-6">
               <div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm font-medium mb-1">
                     <Wallet size={16} />
                     <span className="tracking-wider uppercase text-xs">Tổng tài sản ròng</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                     <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tighter">$124,582.40</h2>
                     <div className="flex items-center gap-1 bg-green-100 dark:bg-green-500/20 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-500/30">
                        <ArrowUpRight size={14} className="text-green-600 dark:text-green-400" />
                        <span className="text-xs font-bold text-green-700 dark:text-green-400">+12.4%</span>
                     </div>
                  </div>
               </div>
               <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-400">
                  <MoreHorizontal size={20} />
               </button>
            </div>

            {/* Chart Area - Simulated SVG Curve */}
            <div className="relative z-10 h-32 w-full mb-6">
               <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <defs>
                     <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EAB308" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                     </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" />
                  
                  {/* Area Fill */}
                  <path d="M0,40 C20,35 30,45 50,20 S70,10 80,15 S90,5 100,0 V50 H0 Z" fill="url(#chartGradient)" />
                  {/* Stroke Line */}
                  <path d="M0,40 C20,35 30,45 50,20 S70,10 80,15 S90,5 100,0" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Animated Dot */}
                  <circle cx="100" cy="0" r="3" fill="#EAB308">
                     <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                     <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
               </svg>
            </div>

            {/* Asset List */}
            <div className="relative z-10 space-y-3">
               <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Danh mục đầu tư</p>
               
               {[
                  { code: 'VNI', name: 'VN-Index', price: '1,284.5', change: '+1.2%', up: true },
                  { code: 'HPG', name: 'Hoa Phat Group', price: '28,400', change: '+3.5%', up: true },
                  { code: 'FPT', name: 'FPT Corp', price: '96,200', change: '-0.8%', up: false },
               ].map((item, i) => (
                  <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors cursor-pointer">
                     <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${item.up ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                           {item.code[0]}
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.code}</h4>
                           <p className="text-xs text-slate-500 dark:text-gray-400">{item.name}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="font-bold text-slate-900 dark:text-white text-sm">{item.price}</p>
                        <p className={`text-xs font-medium flex items-center justify-end gap-0.5 ${item.up ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                           {item.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                           {item.change}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Subtle Noise Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
          </div>
          
          {/* Layer 3: Floating Stats Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-30 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/50 dark:border-white/10 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="relative w-12 h-12">
               <svg className="w-full h-full -rotate-90">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200 dark:text-slate-700" />
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="30" className="text-gold-500" strokeLinecap="round" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-white">
                  75%
               </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wide">Hiệu suất</p>
              <div className="flex items-center gap-1">
                 <Activity size={14} className="text-green-500" />
                 <p className="text-base font-bold text-slate-900 dark:text-white">Xuất sắc</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
