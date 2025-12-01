import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import CourseDetails from './components/CourseDetails';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PromptSuggestions } from './constants';

const App: React.FC = () => {
  const [showPrompts, setShowPrompts] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Theme Toggling Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-white font-sans selection:bg-gold-500 selection:text-black transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        {/* Pass isDark state to Hero to control 3D background colors */}
        <Hero isDark={isDark} />
        <CourseDetails />
        <VideoSection />
        <Testimonials />
      </main>

      <Footer />

      {/* Developer Tool: Toggle Prompts Display */}
      <div className="fixed bottom-4 left-4 z-50">
        <button 
          onClick={() => setShowPrompts(!showPrompts)}
          className="bg-white/90 dark:bg-gray-800 text-xs text-slate-600 dark:text-gray-400 px-3 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-slate-200 dark:border-gray-700 shadow-lg"
        >
          {showPrompts ? 'Ẩn Gợi Ý AI' : 'Hiện Gợi Ý AI (Dev)'}
        </button>
      </div>

      {showPrompts && (
        <div className="fixed bottom-12 left-4 w-96 bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 p-4 rounded-lg shadow-2xl z-50 text-xs overflow-y-auto max-h-96">
          <h3 className="font-bold text-yellow-600 dark:text-gold-400 mb-2">Gợi ý Prompt tạo nội dung (AI):</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Ảnh Hero Banner:</p>
              <p className="text-slate-500 dark:text-gray-400 italic">{PromptSuggestions.heroImage}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Video Voice-over:</p>
              <p className="text-slate-500 dark:text-gray-400 italic">{PromptSuggestions.videoScript}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">3D Texture:</p>
              <p className="text-slate-500 dark:text-gray-400 italic">{PromptSuggestions.texture3D}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;