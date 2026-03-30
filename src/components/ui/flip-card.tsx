'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  emoji?: string;
  image?: string;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#ff2e88',
  emoji,
  image,
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
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
          {/* Background gradient effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${color}15 0%, #0a0a0a 50%, ${color}08 100%)`,
            }}
          />

          {/* Animated visual area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Animated code blocks */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-md opacity-0"
                  style={{
                    width: `${60 + i * 12}px`,
                    height: '8px',
                    background: `linear-gradient(90deg, ${color}${40 + i * 8}, transparent)`,
                    top: `${20 + i * 28}px`,
                    left: `${10 + (i % 3) * 15}px`,
                    animation: `slideIn ${2 + i * 0.3}s ease-in-out ${i * 0.4}s infinite`,
                  }}
                />
              ))}

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${color}88)`,
                    boxShadow: `0 0 60px ${color}40`,
                  }}
                >
                  {emoji ? (
                    <span className="text-3xl md:text-4xl">{emoji}</span>
                  ) : (
                    <Rocket className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Background image overlay (optional) */}
          {image && (
            <>
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${color}cc 0%, ${color}66 30%, rgba(0,0,0,0.7) 100%)`,
                }}
              />
            </>
          )}

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <div className="text-white font-extrabold text-base md:text-lg leading-tight mb-1 truncate">
                  {title}
                </div>
                <div className="text-white/50 text-xs md:text-sm leading-relaxed line-clamp-2">
                  {subtitle}
                </div>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}30` }}
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${color}25 0%, #0a0a0a 40%, ${color}15 100%)`,
            }}
          />

          <div className="relative h-full flex flex-col justify-between p-5 md:p-6">
            {/* Top section */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}30` }}
                >
                  {emoji ? (
                    <span className="text-lg">{emoji}</span>
                  ) : (
                    <Rocket className="w-5 h-5" style={{ color }} />
                  )}
                </div>
                <div className="text-white font-extrabold text-sm md:text-base leading-tight">
                  {title}
                </div>
              </div>
              <div className="text-white/60 text-xs md:text-sm leading-relaxed">
                {description}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 my-4">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5 text-white/80"
                    style={{
                      animation: isFlipped
                        ? `slideInFeature 0.4s ease-out ${index * 0.08}s both`
                        : undefined,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}20` }}
                    >
                      <IconComponent className="w-3.5 h-3.5" style={{ color }} />
                    </div>
                    <span className="text-xs md:text-sm font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="text-sm font-bold"
                  style={{ color }}
                >
                  Ver Demo
                </span>
              </div>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: `${color}25` }}
              >
                <ArrowRight className="w-4 h-4" style={{ color }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { transform: translateX(0); opacity: 0.8; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        @keyframes slideInFeature {
          0% { transform: translateX(-12px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
