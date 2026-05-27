import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { ProgramItem } from '../data';

interface ProgramCardProps {
  key?: string;
  program: ProgramItem;
  index: number;
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  // Solve dynamic icon lookup safely
  const IconComponent = (Icons as any)[program.iconName] || Icons.Heart;
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  // Handle slideshow state for multi-image cards
  const [currentSlide, setCurrentSlide] = useState(0);

  const hasSlides = program.slides && program.slides.length > 0;
  const slideList = program.slides || [];

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSlides) {
      setCurrentSlide((prev) => (prev + 1) % slideList.length);
    }
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSlides) {
      setCurrentSlide((prev) => (prev - 1 + slideList.length) % slideList.length);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      id={`program-${program.numString}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-neutral-100/80 mb-8 overflow-hidden hover:shadow-[0_12px_45px_rgb(0,0,0,0.05)] transition-all duration-300"
    >
      {/* Header Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-extrabold tracking-tight font-serif-emotional text-amber-500/80">
          {program.numString}
        </span>
        <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-600">
          <IconComponent className="w-5 h-5 stroke-[2.2]" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight leading-snug">
        {program.title}
      </h3>

      {/* Program Media Content */}
      <div className="relative rounded-2xl overflow-hidden mb-4 shadow-sm bg-neutral-100 border border-neutral-100">
        {program.numString === "03" ? (
          // Beautiful separated content for Rehab Program 03
          <div className="flex flex-col bg-white">
            {/* 1. Interactive Before & After Slider */}
            <div className="flex bg-neutral-100 p-1 border-b border-neutral-200">
              <button
                type="button"
                onClick={() => setActiveTab('before')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'before'
                    ? 'bg-red-500 text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                Before (치료 전 보행)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('after')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'after'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                After (재활 3달 후) 🎉
              </button>
            </div>

            {/* Before & After Image Viewer */}
            <div className="relative h-44 w-full bg-neutral-50 border-b border-neutral-100">
              {activeTab === 'before' ? (
                <motion.div
                  key="before-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={program.image}
                    alt="재활 치료 전 보행 상태"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-[10px] py-1 px-3 text-center border-t border-white/5">
                    지팡이에 의존하여 보행하시던 무거운 발걸음
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={program.imageAfter}
                    alt="재활 치료 후 걸으시는 모습"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-emerald-700 text-white text-[10px] py-1 px-3 text-center">
                    공단 수기 공모 최우수 보행 재활의 기적
                  </div>
                </motion.div>
              )}
            </div>

            {/* 2. Separated Standalone Photos (Grid of physical therapist & sling class) */}
            <div className="p-2 bg-neutral-50 border-b border-neutral-200">
              <p className="text-[10px] font-extrabold text-neutral-500 mb-2 px-1 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>
                히스토리 기록 사진
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200/50 bg-neutral-100">
                  <img
                    src={program.therapistImage}
                    alt="8년 전 물리치료 시기"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-black/75 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">
                    8년 전 물리치료사
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5e5e5] bg-neutral-100">
                  <img
                    src={program.slingImage}
                    alt="슬링 운동 재활"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-emerald-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">
                    현재 슬링 교실
                  </div>
                </div>
              </div>
            </div>

            {/* Micro achievement badge line */}
            <div className="p-2 py-1.5 bg-amber-50/50 text-[10.5px] font-semibold text-amber-900 flex items-center gap-1.5 select-none text-center justify-center">
              <span className="animate-pulse w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>국민건강보험공단 최우수 혁신 우수사례 표창단 선정</span>
            </div>
          </div>
        ) : hasSlides ? (
          // Elegant Carousel style for multi-image entries
          <div className="relative aspect-video w-full bg-neutral-100">
            {/* Animated slide transitions */}
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={slideList[currentSlide]}
                alt={`${program.title} - 사진 ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Slide Navigation Overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 active:scale-90 transition-all pointer-events-auto cursor-pointer"
                aria-label="이전 사진"
              >
                <Icons.ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 active:scale-90 transition-all pointer-events-auto cursor-pointer"
                aria-label="다음 사진"
              >
                <Icons.ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Image Overlay Counter / Dot Badges */}
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[9px] font-bold px-2 py-1 rounded-md tracking-tight backdrop-blur-xs pointer-events-none">
              {currentSlide + 1} / {slideList.length}
            </div>

            {/* Dots under overlay */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
              {slideList.map((_, dotIdx) => (
                <span
                  key={`dot-${dotIdx}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    dotIdx === currentSlide 
                      ? 'bg-amber-400 w-3' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Custom overlay flags for major programs */}
            {program.numString === "04" && (
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                40평 자연테라스 (슬라이드 가능)
              </span>
            )}
          </div>
        ) : (
          // Regular Program image
          <div className="relative aspect-video w-full bg-neutral-100">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {program.numString === "04" && (
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                40평 대규모 야외 텃밭
              </span>
            )}
            {program.numString === "02" && (
              <span className="absolute top-3 right-3 bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                100% 수제 천연급식
              </span>
            )}
          </div>
        )}
      </div>

      {/* Story / Emotional Description */}
      <div className="bg-neutral-50/75 rounded-2xl p-4 border border-neutral-100 min-h-[140px] flex items-center md:min-h-[110px]">
        <p className="text-neutral-700 text-sm leading-relaxed font-normal whitespace-pre-line w-full">
          {program.story}
        </p>
      </div>
    </motion.div>
  );
}
