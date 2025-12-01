import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/70 dark:bg-dark-950/70 backdrop-blur-lg border-b border-white/20 dark:border-white/5 py-4 shadow-lg shadow-black/5'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* === BRAND LOGO AREA === */}
        <a href="#" className="flex items-center gap-2 group">

          {/* IMAGE LOGO */}
          <img
            src="/static-stock-page/logo.png"
            alt="VinaStock Pro Logo"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />

        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Về Khóa Học', 'Tính Năng', 'Học Viên', 'Liên Hệ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-gray-300 hover:bg-slate-100/50 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-slate-900/90 dark:bg-white/90 backdrop-blur text-white dark:text-dark-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gold-500 dark:hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20 transform hover:-translate-y-0.5">
            Đăng Ký Ngay
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-slate-900 dark:text-white p-2"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {['Về Khóa Học', 'Tính Năng', 'Học Viên', 'Liên Hệ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-base font-medium text-slate-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-gold-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-gold-500 text-dark-950 px-5 py-3 rounded-lg font-bold shadow-lg shadow-gold-500/20">
            Đăng Ký Ngay
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
