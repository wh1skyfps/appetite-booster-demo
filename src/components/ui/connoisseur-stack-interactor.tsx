import { cn } from "@/lib/utils";
import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
}

const defaultItems: MenuItem[] = [
  {
    num: "01",
    name: "Gourmet Burgers",
    clipId: "clip-original",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "02",
    name: "Fresh Desserts",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "03",
    name: "Artisan Waffles",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const ConnoisseurStackInteractor = ({
  items = defaultItems,
  className
}: { items?: MenuItem[]; className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);

    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
    .to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
      stagger: { amount: 0.2, from: "center" }
    })
    .to(selector, {
      scale: 0,
      duration: 0.6,
      stagger: { amount: 0.3, from: "edges" },
      ease: "expo.in",
    });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full",
        className
      )}
    >
      {/* LEFT SIDE: MENU */}
      <div className="flex-1 flex items-center justify-center w-full md:w-auto">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-3 md:gap-4">
            {items.map((item, index) => (
              <div
                key={item.num}
                onMouseEnter={() => handleItemHover(index)}
                className="group cursor-pointer"
              >
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span
                    className={cn(
                      "text-xs md:text-sm font-mono transition-colors duration-300",
                      activeIndex === index
                        ? "text-primary"
                        : "text-section-dark-foreground/30 group-hover:text-primary"
                    )}
                  >
                    {item.num}
                  </span>

                  <div
                    className={cn(
                      "transition-all duration-300",
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-40 group-hover:opacity-80"
                    )}
                  >
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-section-dark-foreground">
                      {item.name.split(" ")[0]}
                    </span>
                    <span
                      className={cn(
                        "block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight transition-colors duration-300",
                        activeIndex === index
                          ? "text-primary"
                          : "text-section-dark-foreground/50 group-hover:text-primary"
                      )}
                    >
                      {item.name.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: SVG GRID */}
      <div className="flex-1 flex items-center justify-center w-full md:w-auto">
        <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-square">
          <svg viewBox="0 0 600 600" className="w-full h-full">
            <defs>
              <clipPath id="clip-original">
                <rect className="path" x="0" y="0" width="190" height="190" rx="4" />
                <rect className="path" x="200" y="0" width="190" height="190" rx="4" />
                <rect className="path" x="400" y="0" width="190" height="190" rx="4" />
                <rect className="path" x="0" y="200" width="190" height="190" rx="4" />
                <rect className="path" x="200" y="200" width="190" height="190" rx="4" />
                <rect className="path" x="400" y="200" width="190" height="190" rx="4" />
                <rect className="path" x="0" y="400" width="190" height="190" rx="4" />
                <rect className="path" x="200" y="400" width="190" height="190" rx="4" />
                <rect className="path" x="400" y="400" width="190" height="190" rx="4" />
              </clipPath>

              <clipPath id="clip-hexagons">
                <circle className="path" cx="100" cy="100" r="90" />
                <circle className="path" cx="300" cy="100" r="90" />
                <circle className="path" cx="500" cy="100" r="90" />
                <circle className="path" cx="200" cy="300" r="90" />
                <circle className="path" cx="400" cy="300" r="90" />
                <circle className="path" cx="100" cy="500" r="90" />
                <circle className="path" cx="300" cy="500" r="90" />
                <circle className="path" cx="500" cy="500" r="90" />
              </clipPath>

              <clipPath id="clip-pixels">
                {Array.from({ length: 9 }).map((_, i) => (
                  <rect
                    key={i}
                    className="path"
                    x={(i % 3) * 200}
                    y={Math.floor(i / 3) * 200}
                    width="190"
                    height="190"
                    rx="4"
                  />
                ))}
              </clipPath>
            </defs>

            <g ref={mainGroupRef} clipPath="url(#clip-original)">
              <image
                ref={imageRef}
                href={items[0].image}
                x="0"
                y="0"
                width="600"
                height="600"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
