import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-dark-950 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 text-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            {/* === LOGO AREA === */}
            <a href="#" className="flex items-center gap-2 mb-6 block w-fit">
              {/* IMAGE LOGO */}
              <img
                src="/logo.png"
                alt="VinaStock Pro Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
              Đơn vị đào tạo chứng khoán thực chiến hàng đầu Việt Nam. Chúng tôi tin rằng kiến thức đúng đắn là con đường ngắn nhất dẫn đến tự do tài chính.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-red-600 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-base">Về Chúng Tôi</h4>
            <ul className="space-y-4">
              {['Giới thiệu', 'Đội ngũ chuyên gia', 'Tuyển dụng', 'Đối tác'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-gold-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-base">Khóa Học</h4>
            <ul className="space-y-4">
              {['Phân tích kỹ thuật cơ bản', 'Smart Money Concept', 'Tâm lý giao dịch', 'Coaching 1-1'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-gold-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-base">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-gray-400">
                <MapPin size={18} className="text-yellow-600 dark:text-gold-400 flex-shrink-0 mt-0.5" />
                <span>55 Giải Phóng, Q.Hai Bà Trưng, TP.Hà Nội</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-gray-400">
                <Phone size={18} className="text-yellow-600 dark:text-gold-400 flex-shrink-0" />
                <span>0988 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-gray-400">
                <Mail size={18} className="text-yellow-600 dark:text-gold-400 flex-shrink-0" />
                <span>contact@ahkt.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-gray-500">© {new Date().getFullYear()} AHKT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white">Điều khoản sử dụng</a>
            <a href="#" className="text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
