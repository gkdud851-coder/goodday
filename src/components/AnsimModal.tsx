import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Bookmark, HeartHandshake, ChevronLeft, ChevronRight } from 'lucide-react';
import { ANSIM_MODAL_CONTENT } from '../data';

interface AnsimModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCloseAndFocus: () => void;
}

export default function AnsimModal({ isOpen, onClose, onCloseAndFocus }: AnsimModalProps) {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewImages = ANSIM_MODAL_CONTENT.guardianReviews || [];

  const handleNextReview = () => {
    if (reviewImages.length > 0) {
      setCurrentReview((prev) => (prev + 1) % reviewImages.length);
    }
  };

  const handlePrevReview = () => {
    if (reviewImages.length > 0) {
      setCurrentReview((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="ansim-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          {/* Backdrop absolute clickable area */}
          <div className="absolute inset-0" onClick={onClose}></div>

          {/* Modal Container */}
          <motion.div
            id="ansim-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-md h-[85vh] bg-[#FDFBF7] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-amber-100"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-amber-500/10 border-b border-amber-500/15">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold text-amber-800 tracking-wider uppercase">안심 보장 스토리</span>
              </div>
              <button
                type="button"
                id="modal-header-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-full bg-neutral-200/55 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Contents */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {/* Main Title Section */}
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug font-serif-emotional">
                  {ANSIM_MODAL_CONTENT.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed bg-amber-50/50 rounded-2xl p-4 border border-amber-100/40">
                  {ANSIM_MODAL_CONTENT.summary}
                </p>
              </div>

              {/* Dynamic Guardian Handwritten Reviews Slider */}
              {reviewImages.length > 0 && (
                <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.015)] border border-neutral-100 flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
                      <h4 className="text-xs font-bold text-neutral-900">
                        실제 보호자님들이 보낸 감사 편지
                      </h4>
                    </div>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">자필 후기 수록</span>
                  </div>

                  {/* Image Holder with Nav buttons */}
                  <div className="relative bg-neutral-50 rounded-xl overflow-hidden aspect-[4/3] border border-neutral-100">
                    <motion.div
                      key={`review-slide-${currentReview}`}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={reviewImages[currentReview]}
                        alt={`가족 보호자 자필 감사 후기 ${currentReview + 1}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>

                    {/* Nav Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none">
                      <button
                        type="button"
                        onClick={handlePrevReview}
                        className="w-7 h-7 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all pointer-events-auto cursor-pointer"
                        aria-label="이전 감사 편지"
                      >
                        <ChevronLeft className="w-4 h-4 text-white font-bold" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextReview}
                        className="w-7 h-7 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all pointer-events-auto cursor-pointer"
                        aria-label="다음 감사 편지"
                      >
                        <ChevronRight className="w-4 h-4 text-white font-bold" />
                      </button>
                    </div>

                    {/* Slide Index overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md pointer-events-none">
                      편지 {currentReview + 1} / {reviewImages.length}
                    </div>
                  </div>

                  {/* Review bottom navigation dots */}
                  <div className="flex justify-center gap-1.5 pt-1">
                    {reviewImages.map((_, idx) => (
                      <span
                        key={`review-dot-${idx}`}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === currentReview ? 'bg-emerald-600 w-3.5' : 'bg-neutral-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Miracle Story Section */}
              <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.01)] border border-neutral-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-4 bg-amber-500 rounded-full"></span>
                  <h4 className="text-sm font-bold text-neutral-900">
                    {ANSIM_MODAL_CONTENT.miracleTitle}
                  </h4>
                </div>
                
                {/* Visual quote indicator */}
                <div className="border-l-2 border-amber-400 pl-3 my-2">
                  <p className="text-xs italic font-medium text-amber-900">
                    “어머님, 강제로 계시지 않아도 돼요. 매일 딱 1시간만 놀다 가세요.”
                  </p>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed whitespace-pre-line text-justify">
                  {ANSIM_MODAL_CONTENT.miracleStory}
                </p>
              </div>

              {/* 3 Promises Section */}
              <div className="space-y-3.5">
                <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                  <Bookmark className="w-4 h-4 text-emerald-600" />
                  굿데이케어센터의 '안심 보장' 약속
                </h4>

                <div className="space-y-2.5">
                  {ANSIM_MODAL_CONTENT.promises.map((promise, index) => (
                    <div
                      key={`promise-${index}`}
                      className="flex gap-3 p-3.5 bg-neutral-100/60 rounded-2xl border border-neutral-200/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[12px] font-bold text-neutral-900 leading-tight">
                          {promise.title}
                        </h5>
                        <p className="text-[11px] text-neutral-600 leading-relaxed mt-1">
                          {promise.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer / Form Focus Close Button */}
            <div className="p-4 bg-white border-t border-neutral-100">
              <button
                type="button"
                id="modal-footer-close-btn"
                onClick={onCloseAndFocus}
                className="w-full h-12 flex items-center justify-center gap-1.5 bg-emerald-600 text-white font-bold text-sm rounded-2xl shadow-md hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>{ANSIM_MODAL_CONTENT.closeButtonText}</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
