import React from 'react';
import { ArrowRight, Clock3, Compass, HeartHandshake, Layers3, Sparkles, Star, Sun } from 'lucide-react';

const services = [
  {
    title: '占星骰與牌卡諮詢',
    description: '從當下最在意的問題出發，透過象徵與提問，整理思緒並探索下一步。',
    options: ['30 分鐘｜NT$800', '60 分鐘｜NT$1,280'],
    icon: Sparkles,
  },
  {
    title: '主題星盤諮詢',
    description: '聚焦工作、愛情、關係或特定事件，從星盤脈絡梳理議題，找到更清晰的理解方向。',
    options: ['60 分鐘｜NT$1,600'],
    icon: Compass,
  },
  {
    title: '年度運勢諮詢',
    description: '回看年度節奏與轉折，協助你理解不同階段的重點，為接下來的安排保留餘裕。',
    options: ['60 分鐘｜NT$2,000'],
    icon: Sun,
  },
  {
    title: '個人特質諮詢',
    description: '從你的星盤結構出發，認識天賦、需求與慣性，建立更貼近自己的生活方式。',
    options: ['90 分鐘｜NT$2,400'],
    icon: Star,
  },
  {
    title: '生命課題諮詢',
    description: '深入探索反覆出現的生命議題，從經驗與星盤中整理脈絡，理解正在學習的人生功課。',
    options: ['120 分鐘｜NT$4,200'],
    icon: Layers3,
  },
];

export const ConsultationPage: React.FC = () => {
  return (
    <main className="relative min-h-screen pt-16">
      <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center">
        <div className="absolute inset-0 cosmic-hero-bg opacity-45 pointer-events-none" />
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d28b4c]/15 blur-[110px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f4d03f]/35 bg-[#f4d03f]/10 px-4 py-2 text-sm font-semibold text-[#f4d03f]">
            <HeartHandshake className="h-4 w-4" />
            一對一諮詢服務
          </div>
          <h1 className="fluid-title-hero mt-6 font-bold text-white serif-font">
            為此刻的你，<span className="text-[#d28b4c]">留一段探索的時間</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            從你真正想理解的問題開始。透過星盤解析、提問與對話，陪你梳理感受、看見脈絡，找到更適合自己的方向。
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#f4d03f] to-transparent" />
          <h2 className="fluid-title-h2 mt-5 font-bold text-white serif-font">選擇適合你的諮詢主題</h2>
          <p className="mt-3 text-sm text-slate-400">每一次諮詢，都從你的生活經驗與問題出發。</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={`glass-panel group relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl border p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#d28b4c]/60 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d28b4c]/10 blur-2xl transition group-hover:bg-[#f4d03f]/15" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d28b4c]/35 bg-[#d28b4c]/10 text-[#f4d03f]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-white serif-font">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
                <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                  {service.options.map((option) => (
                    <span key={option} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#f4d03f]">
                      <Clock3 className="h-3.5 w-3.5" />{option}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d28b4c]/45 bg-gradient-to-br from-[#162f3a]/95 via-[#0b1d26]/95 to-[#07141a] px-7 py-10 text-center shadow-2xl sm:px-12 sm:py-14">
          <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-[#d28b4c]/15 blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-sm font-semibold tracking-widest text-[#f4d03f]">準備開始一場對話</p>
            <h2 className="fluid-title-h2 mt-4 font-bold text-white serif-font">讓問題被好好理解，也讓選擇慢慢清楚</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">若你還不確定適合哪一項服務，也歡迎先透過 LINE 與我們聊聊，從你想探索的主題開始。</p>
            <a href="https://lin.ee/WrnBYmS" target="_blank" rel="noreferrer" className="btn-amber mt-7 rounded-full px-7 py-3 text-sm font-bold shadow-xl">
              聯絡我們安排諮詢 <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
