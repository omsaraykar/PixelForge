
const CoolButton = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
    {children}
  </button>
);

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 to-black" data-aos="fade-right">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4" data-aos="zoom-in">
          Forge Stunning Visuals Into NFTs — Instantly
        </h1>
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up">
          A simple and secure platform to mint your digital art on-chain.
        </p>
        <div data-aos="zoom-in-up">
          <CoolButton> Start Minting Now </CoolButton>
        </div>
      </section>
  );
}