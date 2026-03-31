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
  icon?: React.ReactNode;
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
  icon,
  image,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full perspective-[1200px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative w-full aspect-[4/3] transition-transform duration-700 ease-in-out',
          '[transform-style:preserve-3d]'
        )}
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* Background gradient effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at top, ${color}22, transparent 70%)`,
            }}
          />

          {/* Image background */}
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          )}

          {/* Animated code blocks */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-md opacity-0"
                  style={{
                    width: `${60 + i * 12}px`,
                    height: '8px',
                    background: `${color}${30 + i * 8}`,
                    top: `${20 + i * 18}px`,
                    left: `${10 + (i % 3) * 15}px`,
                    animation: `slideIn ${2 + i * 0.4}s ${i * 0.3}s infinite ease-in-out`,
                  }}
                />
              ))}

              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  {icon || <Rocket className="w-7 h-7" style={{ color }} />}
                </div>
              </div>
            </div>
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,3%)] via-[hsl(220,15%,3%)]/70 to-transparent" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white/95 tracking-tight mb-1">
                  {title}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm max-w-[240px] leading-relaxed">
                  {subtitle}
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300"
                style={{ background: `${color}15` }}
              >
                <ArrowRight className="w-4 h-4" style={{ color }} />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/[0.06]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${color}08, hsl(220,15%,5%), ${color}05)`,
            }}
          />

          <div className="relative h-full flex flex-col p-6 md:p-8">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                >
                  {icon || <Rocket className="w-4 h-4" style={{ color }} />}
                </div>
                <h3 className="text-lg font-bold text-white/90">{title}</h3>
              </div>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15` }}
                    >
                      <IconComponent className="w-3 h-3" style={{ color }} />
                    </div>
                    <span className="text-white/60 text-[10px] sm:text-xs font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-bold tracking-wide uppercase"
                  style={{ color }}
                >
                  Explorar demos
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}15` }}
                >
                  <ArrowRight className="w-3.5 h-3.5" style={{ color }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
