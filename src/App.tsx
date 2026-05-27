import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  BookOpen, 
  Award, 
  Heart, 
  ExternalLink, 
  ShieldCheck, 
  Compass, 
  Gift, 
  ChevronDown, 
  ArrowUp,
  HeartHandshake,
  Check,
  Smartphone,
  Info
} from 'lucide-react';

import { 
  BRAND_STORY, 
  VALUE_STORY, 
  PROGRAMS, 
  ACHIEVEMENTS, 
  ANSIM_MODAL_CONTENT, 
  CONTACT_INFO 
} from './data';
import ProgramCard from './components/ProgramCard';
import AnsimModal from './components/AnsimModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Progress Bar configuration
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle showing scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close modal and focus contact section
  const handleCloseAndFocusContact = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      const target = document.getElementById('cta-contact-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  return (
    // Outer ambient wrapper for desktop experience with responsive center column
    <div className="min-h-screen bg-[#F4F1EA] text-neutral-800 antialiased flex justify-center selection:bg-amber-100 selection:text-amber-900">
      
      {/* Desktop Left Decorator Column (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between max-w-sm p-8 sticky top-0 h-screen select-none">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md bg-white flex items-center justify-center p-1 border border-neutral-200/20 shrink-0">
              <img 
                src={CONTACT_INFO.logoPhoto}
                alt="굿데이케어센터 프리미엄 로고"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Premium Daycare</p>
              <h1 className="text-xl font-extrabold text-neutral-900 leading-none">굿데이케어센터</h1>
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <p className="text-sm text-neutral-600 leading-relaxed font-serif-emotional">
              “정성스런 아들의 마음으로 부모님을 또 하나의 가족이 되어 모시겠습니다.”
            </p>

          </div>
        </div>

        {/* Brand stats decoration */}
        <div className="space-y-3 border-t border-neutral-200 pt-6">
          <div className="flex justify-between text-xs font-medium text-neutral-500">
            <span>설립 연도</span>
            <span className="font-bold text-neutral-800">2018년 (8주년 돌봄)</span>
          </div>
          <div className="flex justify-between text-xs font-medium text-neutral-500">
            <span>요양평가 최고 등급</span>
            <span className="font-bold text-emerald-600">A등급 최우수</span>
          </div>
          <p className="text-[10px] text-neutral-400">© GOOD DAY CARE CENTER. All rights reserved.</p>
        </div>
      </div>

      {/* Main Responsive Mobile Screen Mockup Container */}
      <div 
        id="mobile-viewport"
        className="w-full max-w-md bg-[#FDFBF7] shadow-[0_25px_60px_rgba(45,35,20,0.06)] min-h-screen relative flex flex-col border-x border-neutral-200/40"
      >
        {/* Animated Mobile Native Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-amber-500 origin-left z-50 max-w-md mx-auto" 
          style={{ scaleX }} 
        />

        {/* Fixed Mini Floating Header */}
        <header className="sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-40 px-5 py-3.5 border-b border-amber-900/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden bg-white shadow-xs border border-amber-950/5 flex items-center justify-center p-0.5 shrink-0">
              <img
                src={CONTACT_INFO.logoPhoto}
                alt="굿데이케어센터 로고"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-sm font-black tracking-tight text-neutral-900 font-serif-emotional font-semibold">
              굿데이케어센터
            </span>
          </div>
          
          <button
            type="button"
            id="header-cta-btn"
            onClick={() => {
              const target = document.getElementById('cta-contact-section');
              if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 font-bold text-xs text-white rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            상담/체험문의
          </button>
        </header>

        {/* 1. HERO SECTION (브랜드 스토리 및 인사말) */}
        <section id="hero-section" className="relative pb-16 bg-gradient-to-b from-amber-500/5 via-[#FDFBF7] to-[#FDFBF7]">
          {/* Main Full-Width Representative Photo */}
          <div className="relative w-full h-[320px] overflow-hidden shadow-xs">
            <img 
              src={BRAND_STORY.ceoPhoto} 
              alt="인자하게 웃고 있는 굿데이케어센터 대표원장님 프로필" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Soft Overlay Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Visual Header Text Inside Photo Frame */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-[11px] font-black uppercase tracking-widest text-amber-400 mb-1">GOOD DAY CARE STORY</p>
              <h2 className="text-xl font-extrabold tracking-tight leading-snug drop-shadow-sm font-serif-emotional">
                {BRAND_STORY.heroHeader}
              </h2>
            </div>
          </div>

          {/* Emotional Brand Essay Text */}
          <div className="px-6 pt-10 space-y-6">
            {/* Paragraphs with generous spacing and beautiful typography */}
            <div className="space-y-4.5 text-neutral-700 text-[13.5px] leading-relaxed font-normal tracking-wide">
              {BRAND_STORY.paragraphs.map((para, idx) => {
                // Emphasize the turning point sentence
                const isEmphasized = para.includes("두루마리 휴지 한 조각") || para.includes("시작이자 이유");
                return (
                  <p 
                    key={`para-${idx}`} 
                    className={`whitespace-pre-line text-justify ${
                      isEmphasized 
                        ? 'p-4 bg-amber-500/5 border-l-3 border-amber-500 text-neutral-900 font-bold rounded-r-2xl shadow-xs' 
                        : ''
                    }`}
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Signature Area */}
            <div className="pt-6 border-t border-dashed border-amber-900/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-500 font-medium">부모님을 섬기는 평온한 마음으로</p>
                <p className="text-sm font-extrabold text-neutral-900 font-serif-emotional mt-1">굿데이케어센터 대표원장 드림</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Heart className="w-5 h-5 fill-emerald-100" />
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Curved Wave Divider */}
        <div className="h-4 bg-[#F3EFE6]" />

        {/* 2. VALUE SECTION (감정 연결 및 선생님 가치) */}
        <section id="values-section" className="py-16 bg-[#FDFBF7] px-6">
          {/* Bridge Copy with emotional touch */}
          <div className="text-center mb-10 space-y-3">
            <div className="inline-block px-3 py-1 bg-amber-100/60 rounded-full text-[10px] font-black tracking-widest text-amber-800 uppercase mb-2">
              Our Value
            </div>
            
            {VALUE_STORY.bridgeLines.map((line, idx) => {
              const isFirst = idx === 0;
              return (
                <p 
                  key={`line-${idx}`} 
                  className={`text-center tracking-tight leading-relaxed ${
                    isFirst 
                      ? 'text-lg font-bold text-neutral-900 font-serif-emotional pb-1' 
                      : 'text-xs text-neutral-600'
                  }`}
                >
                  {line}
                </p>
              );
            })}
          </div>

          {/* Teacher Centered Headline */}
          <div className="mt-12 mb-6">
            <h3 className="text-lg font-extrabold text-neutral-950 tracking-tight leading-snug font-serif-emotional border-l-4 border-emerald-600 pl-3">
              {VALUE_STORY.mainHeader}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed mt-2.5">
              {VALUE_STORY.subCopy}
            </p>
          </div>

          {/* Care Teachers full height photo with glossy border */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-neutral-100 aspect-4/3 relative group">
            <img 
              src={VALUE_STORY.teachersPhoto} 
              alt="활짝 웃고 있는 굿데이케어센터 천사 선생님들 단체 사진" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-4 flex items-center justify-between">
              <p className="text-xs font-bold text-white">따뜻한 마음의 일류 복지사 드림팀</p>
              <span className="px-2 py-1 bg-emerald-600 text-white text-[9px] font-black rounded-sm shadow-xs uppercase">
                우수교사 다수 선정
              </span>
            </div>
          </div>
        </section>

        {/* Decorative Light Wave Divider */}
        <div className="h-4 bg-[#F3EFE6]" />

        {/* 3. CORE PROGRAMS SECTION (10대 특별 프로그램 세로 스크롤 카드) */}
        <section id="programs-section" className="py-16 bg-[#FDFBF7] px-6">
          <div className="mb-10 text-center space-y-2">
            <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-black tracking-wider rounded-full border border-emerald-200/50 uppercase">
              Elder-Centered Programs
            </span>
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight leading-snug font-serif-emotional mt-3">
              어르신 중심의 10대 특별 프로그램
            </h2>
            <p className="text-xs text-neutral-600">
              어르신들이 매일 아침 오고 싶어 하는 즐거운 놀이터이자 쉼터
            </p>
          </div>

          {/* Vertical scroll program cards rendering */}
          <div className="space-y-4">
            {PROGRAMS.map((program, index) => (
              <ProgramCard 
                key={program.id} 
                program={program} 
                index={index} 
              />
            ))}
          </div>
        </section>

        {/* 4. RETENTION & ACHIEVEMENTS PANEL (8년의 성과, 그러나 주인공은 어르신) */}
        <section id="achievements-section" className="py-16 bg-neutral-950 text-white px-6 relative overflow-hidden">
          {/* Subtle elegant backdrop mesh glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-700/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-600/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs font-black tracking-widest text-amber-400 uppercase">Our Milestones</span>
              <h2 className="text-lg font-bold text-white leading-snug font-serif-emotional tracking-tight">
                8년의 정직한 걸음, 주위에서 인정한 굿데이
              </h2>
              <div className="w-10 h-[1.5px] bg-amber-400/50 mx-auto mt-3" />
            </div>

            {/* Achievements layout column */}
            <div className="space-y-4 mb-12">
              {ACHIEVEMENTS.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.05] hover:bg-white/[0.08] transition-all duration-200"
                >
                  <div className="p-2.5 bg-amber-500/15 rounded-xl text-amber-400 self-start shadow-xs flex-shrink-0">
                    <Award className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <p className="text-neutral-200 text-xs font-bold leading-relaxed flex-1 mt-1.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Touch-down emotional statement with custom box */}
            <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] overflow-hidden shadow-xl p-5.5 space-y-4">
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-amber-400 text-neutral-950 text-[9px] font-black rounded-md tracking-wider uppercase">
                  실제 돌봄의 가치
                </span>
              </div>
              
              {/* Heartwarming Anniversary Event Image with beautiful border */}
              <div className="rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-md relative group bg-neutral-900/40">
                <img 
                  src={CONTACT_INFO.anniversaryPhoto} 
                  alt="어르신의 주년을 온정을 담아 축하해 드리는 행복한 굿데이케어센터 모습" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3 text-left">
                  <p className="text-[10px] font-extrabold text-amber-300">굿데이 어르신 감사 기념 잔치</p>
                </div>
              </div>

              <div className="space-y-3.5 text-center pt-1.5">
                <p className="text-[13px] font-bold text-[#fefefa] leading-relaxed font-serif-emotional">
                  저희는 단 한 번도 센터를 위한 주년 행사를 열거나 자축한 적이 없습니다.
                </p>
                
                <div className="w-8 h-[0.5px] bg-amber-400/20 mx-auto" />
                
                <p className="text-xs text-neutral-300 leading-relaxed font-normal text-start">
                  오히려 저희가 집중한 것은 오직 어르신의 1주년, 2주년, 3주년을 축하해 드리는 일이었습니다. 저희 센터의 주인공은 오직 어르신들이고, 저희 센터의 자랑은 오직 선생님들이기 때문입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ANXIETY RELIEF SENSOR & TRIGGER SECTION (보호자 불안 해소 안심 장치) */}
        <section id="anxiety-trigger-section" className="py-12 bg-amber-50 px-6 text-center border-y border-amber-900/10">
          <div className="max-w-xs mx-auto space-y-4.5">
            <h3 className="text-sm font-bold text-neutral-900 leading-snug font-serif-emotional">
              부모님 등교 적응이 염려스러우신가요?
            </h3>
            
            <p className="text-[11.5px] text-neutral-600 leading-relaxed">
              부모님께서 낯선 환경에 긴장하시는 걱정, 보호자분들의 무거운 마음을 100% 공감합니다.
            </p>

            {/* Animated Pulsing Action Button */}
            <motion.button
              type="button"
              id="modal-trigger-btn"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full min-h-[50px] px-5 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-[12.5px] rounded-2xl shadow-lg border border-amber-600/10 flex items-center justify-center gap-1.5 relative overflow-hidden group cursor-pointer"
            >
              {/* Pulsing light overlay for attention */}
              <span className="absolute inset-0 bg-white/20 animate-pulse mix-blend-overlay"></span>
              <span>{ANSIM_MODAL_CONTENT.triggerText}</span>
            </motion.button>
          </div>
        </section>

        {/* 6. CALL TO ACTION & FOOTER MAP (고정형 상담 및 오시는 길) */}
        <section id="cta-contact-section" className="py-16 bg-[#FDFBF7] px-6 border-b border-dashed border-amber-900/10">
          <div className="text-center mb-8 space-y-2">
            <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">Fast Response</span>
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight font-serif-emotional">
              부모님의 평온한 매일, 지금 시작해보세요
            </h2>
            <p className="text-xs text-neutral-500">
              간단한 방문 상담 및 무료 하루 체험은 언제나 열려있습니다.
            </p>
          </div>

          {/* Heavy fingers buttons column */}
          <div className="space-y-3.5 max-w-sm mx-auto">
            {/* Phone Button */}
            <a
              id="phone-cta-link"
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full min-h-[52px] flex items-center justify-between px-5 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-2.5xl shadow-md active:scale-[0.98] transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-100 shrink-0" />
                <span>친절 상담 즉시 전화걸기</span>
              </span>
              <span className="text-[11px] bg-black/15 px-2.5 py-0.5 rounded-full font-sans tracking-normal">
                {CONTACT_INFO.phone}
              </span>
            </a>

            {/* Naver Map Button */}
            <a
              id="map-cta-link"
              href={CONTACT_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="w-full min-h-[52px] flex items-center justify-between px-5 py-4 bg-[#03C75A] hover:bg-[#02b150] text-white font-black text-sm rounded-2.5xl shadow-md active:scale-[0.98] transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-50 shrink-0" />
                <span>오시는 길 (네이버 지도)</span>
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* Blog Button */}
            <a
              id="blog-cta-link"
              href={CONTACT_INFO.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="w-full min-h-[52px] flex items-center justify-between px-5 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black text-sm rounded-2.5xl shadow-md active:scale-[0.98] transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-50 shrink-0" />
                <span className="text-[12.5px] text-left leading-tight tracking-tight">
                  {CONTACT_INFO.blogLabel.replace('📝 ', '')}
                </span>
              </span>
              <ExternalLink className="w-4 h-4 opacity-80 shrink-0" />
            </a>
          </div>
        </section>

        {/* Small Footer Area */}
        <footer className="bg-neutral-100 py-10 px-6 text-center text-xs text-neutral-500 border-t border-neutral-200/50 space-y-4">
          <div className="space-y-1">
            <p className="font-extrabold text-neutral-700 font-serif-emotional">굿데이케어센터 주간보호전문기관</p>
            <p className="text-[10px] leading-relaxed">
              대표번호: {CONTACT_INFO.phone} • A등급 최우수 돌봄 인증
            </p>
            <p className="text-[10px]">
              부모님들의 안락한 쉼터, 또 하나의 동행이 되겠습니다.
            </p>
          </div>
          
          <div className="w-10 h-[1.5px] bg-neutral-300 mx-auto" />
          
          <p className="text-[9px] text-neutral-400">
            © GOOD DAY CARE CENTER. All rights reserved.
          </p>
        </footer>

        {/* Scroll To Top button */}
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-floating-btn"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 lg:bottom-12 lg:-mr-16 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg active:scale-90 transition-all cursor-pointer"
            aria-label="맨 위로 가기"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </motion.button>
        )}

        {/* Ansim Modal Layer Component */}
        <AnsimModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onCloseAndFocus={handleCloseAndFocusContact}
        />
      </div>
    </div>
  );
}
