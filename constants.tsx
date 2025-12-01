import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Globe } from 'lucide-react';
import { FeatureItem, TestimonialItem, SubtitleCue } from './types';

export const PromptSuggestions = {
  heroImage: "Futuristic stock market dashboard, 3D isometric view, dark blue and gold color scheme, glowing candlesticks, floating data particles, high quality, 8k render, unreal engine 5 style.",
  videoScript: "Một video ngắn 30s với giọng đọc trầm ấm, tự tin. Hình ảnh: Các toà nhà tài chính lồng ghép với biểu đồ tăng trưởng. Script: 'Bạn đã sẵn sàng làm chủ dòng tiền? AHKT mang đến công nghệ phân tích dòng tiền cá mập, giúp bạn đi trước thị trường một bước.'",
  texture3D: "Seamless tech grid texture, dark background with golden connection lines, cyber security node network.",
  lottieAnimation: "Rising stock graph with bull market symbol, green and gold colors, smooth motion."
};

export const FEATURES: FeatureItem[] = [
  {
    title: "Phân Tích Dòng Tiền",
    description: "Công cụ độc quyền giúp phát hiện dấu chân 'Cá Mập' trước khi giá chạy.",
    icon: <TrendingUp className="w-6 h-6 text-gold-400" />,
  },
  {
    title: "Quản Trị Rủi Ro AI",
    description: "Hệ thống cảnh báo rủi ro tự động dựa trên thuật toán Machine Learning.",
    icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
  },
  {
    title: "Giao Dịch Thực Chiến",
    description: "Live trading cùng chuyên gia vào phiên ATO/ATC hàng ngày.",
    icon: <Zap className="w-6 h-6 text-gold-400" />,
  },
  {
    title: "Dữ Liệu Toàn Cầu",
    description: "Kết nối dữ liệu Vĩ mô liên thị trường (DJIA, Gold, DXY, Oil).",
    icon: <Globe className="w-6 h-6 text-gold-400" />,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Nguyễn Văn An",
    role: "Full-time Trader",
    content: "Phương pháp của AHKT đã thay đổi hoàn toàn tư duy của tôi. Không còn FOMO, chỉ còn kỷ luật và lợi nhuận.",
    avatar: "https://picsum.photos/100/100?random=1",
    profit: "+45% Portfolio",
  },
  {
    name: "Trần Thị Bích",
    role: "Nhân viên văn phòng",
    content: "Khóa học rất phù hợp cho người bận rộn. Tôi chỉ mất 15 phút mỗi tối để lọc cổ phiếu tiềm năng.",
    avatar: "https://picsum.photos/100/100?random=2",
    profit: "+22% / Quý",
  },
  {
    name: "Lê Hoàng Nam",
    role: "Chủ doanh nghiệp",
    content: "Giao diện web đẹp, kiến thức thực chiến cao. Đây là khoản đầu tư tốt nhất của tôi trong năm nay.",
    avatar: "https://picsum.photos/100/100?random=3",
    profit: "+120% NAV",
  },
];

export const VIDEO_SUBTITLES: SubtitleCue[] = [
  { startTime: 0, endTime: 3, text: "Thị trường chứng khoán không phải là canh bạc." },
  { startTime: 3, endTime: 6, text: "Đó là nơi trí tuệ và kỷ luật chuyển hóa thành tài sản." },
  { startTime: 6, endTime: 10, text: "Tại AHKT, chúng tôi cung cấp bản đồ kho báu cho bạn." },
  { startTime: 10, endTime: 14, text: "Hệ thống phân tích dòng tiền thông minh, độc quyền." },
  { startTime: 14, endTime: 18, text: "Tham gia ngay hôm nay để kiến tạo tự do tài chính." },
];