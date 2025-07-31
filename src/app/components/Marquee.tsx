export default function PixelForgeMarquee() {
  return (
    <div className="relative overflow-hidden w-full h-32 bg-transparent z-50 pointer-events-none">
      <div className="absolute inset-0 flex items-center animate-marquee blur-2xl opacity-30">
        <h1 className="text-[7rem] font-extrabold text-cyan-400 whitespace-nowrap tracking-wider">
          PixelForge • PixelForge • PixelForge • PixelForge •
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center animate-marquee">
        <h1 className="text-[7rem] font-extrabold text-cyan-300 whitespace-nowrap tracking-wider drop-shadow-[0_0_25px_cyan]">
          PixelForge • PixelForge • PixelForge • PixelForge •
        </h1>
      </div>
    </div>
  );
}