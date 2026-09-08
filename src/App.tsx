import React, { useState, useEffect, useCallback } from 'react';
import type { PageRoute } from './types';
import { StarBackground } from './components/StarBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrandInfoPage } from './pages/BrandInfoPage';
import { CourseSeries1Page } from './pages/CourseSeries1Page';
import { CourseIndexPage } from './pages/CourseIndexPage';
import { CourseSeries2Page } from './pages/CourseSeries2Page';
import { CourseSeries3Page } from './pages/CourseSeries3Page';
import { CourseSeriesNav } from './components/CourseSeriesNav';
import { EventRegisterPage } from './pages/EventRegisterPage';
import { ConsultationPage } from './pages/ConsultationPage';

export default function App() {
  const getInitialPath = (): PageRoute => {
    const rawPath = window.location.pathname.replace(/\/$/, '') || '/';
    let path = (rawPath === '/register/series-2' || rawPath === '/register/series-3')
      ? rawPath.replace('/register', '/course') as PageRoute
      : rawPath;
    if (path.startsWith('/workshop')) {
      path = path.replace('/workshop', '/course') as PageRoute;
    }
    const routes: PageRoute[] = ['/', '/consultation', '/course', '/course/series-1', '/course/series-2', '/course/series-3', '/register', '/register/series-2', '/register/series-3'];
    return routes.includes(path as PageRoute) ? path as PageRoute : '/';
  };
  const [currentPath, setCurrentPath] = useState<PageRoute>(getInitialPath);
  useEffect(() => {
    const onPop = () => setCurrentPath(getInitialPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      '/': 'Galaxy Answers 星聲工作室',
      '/consultation': '諮詢服務｜Galaxy Answers 星聲工作室',
      '/course': '人生星方向課程｜Galaxy Answers 星聲工作室',
      '/course/series-1': '系列一・太陽月亮金星｜Galaxy Answers 星聲工作室',
      '/course/series-2': '系列二・太陽水星木星｜Galaxy Answers 星聲工作室',
      '/course/series-3': '系列三・太陽火星土星｜Galaxy Answers 星聲工作室',
      '/register': '系列一報名｜Galaxy Answers 星聲工作室',
      '/register/series-2': '系列二報名｜Galaxy Answers 星聲工作室',
      '/register/series-3': '系列三報名｜Galaxy Answers 星聲工作室',
    };
    document.title = titles[currentPath];
  }, [currentPath]);

  // 切換頁面函式
  const handleNavigate = useCallback((newPath: PageRoute) => {
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    setCurrentPath(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1d26] text-slate-100 relative selection:bg-[#d28b4c]/30 selection:text-[#f4d03f]">
      {/* 動態星空粒子背景 */}
      <StarBackground />

      {/* 頂部導覽列 */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* 三頁獨立頁面內容切換 */}
      <div className="flex-1">
        {currentPath.startsWith('/register') && (
          <EventRegisterPage onNavigate={handleNavigate} />
        )}
        {currentPath.startsWith('/course') && <CourseSeriesNav currentPath={currentPath} onNavigate={handleNavigate} />}
        {currentPath === '/consultation' && <ConsultationPage />}
        {currentPath === '/course' && <CourseIndexPage onNavigate={handleNavigate} />}
        {currentPath === '/course/series-3' && <CourseSeries3Page onNavigate={handleNavigate} />}
        {currentPath === '/course/series-2' && <CourseSeries2Page onNavigate={handleNavigate} />}
        {currentPath === '/course/series-1' && (
          <CourseSeries1Page onNavigate={handleNavigate} />
        )}
        {currentPath === '/' && (
          <BrandInfoPage onNavigate={handleNavigate} />
        )}
      </div>

      {/* 頁尾 */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
