'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Eye, Smartphone, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  image?: string;
  emoji?: string;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#ff2e88',
  image,
  emoji = '🍽️',
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-full [perspective:1200px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped((f) => !f)}
    >
      <div
        className={cn(
          'relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]',
          isFlipped && '[transform:rotateY(180deg)]'
        )}
      >
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          {/* Background image */}
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          {/* Overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${color}dd 0%, ${color}88 35%, transparent 70%)`,
            }}
          />

          {/* Emoji badge */}
          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/30 backdrop-blur-md flex items-center justify-center text-2xl">
            {emoji}
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h3 className="text-white font-extrabold text-lg md:text-xl leading-tight mb-1">
              {title}
            </h3>
            <p className="text-white/75 text-xs md:text-sm leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-white/50 text-xs font-medium">
              <span>Hover para detalhes</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative h-full flex flex-col justify-between p-5 md:p-6">
            {/* Top */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{emoji}</span>
                <h3 className="text-white font-extrabold text-base md:text-lg leading-tight">
                  {title}
                </h3>
              </div>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2.5 my-4">
              {features.map((feature, index) => {
                const icons = [Eye, Smartphone, TrendingUp, Zap];
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 text-white/90"
                    style={{
                      animation: isFlipped
                        ? `fadeSlideIn 0.4s ease-out ${index * 0.08}s both`
                        : undefined,
                    }}
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs md:text-sm font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between text-white text-sm font-bold">
              <span>Ver Demo</span>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          0% { transform: translateX(-12px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
