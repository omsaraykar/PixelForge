
export default function HowItWorksSection() {


  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500" data-aos="zoom-in">
          How It Works
        </h2>

        <div className="relative border-l-2 border-gray-700 pl-6 space-y-12">
          {[
            { title: "Upload", desc: "Add your artwork (image, audio, or video) to begin your minting journey.", emoji: "📤" },
            { title: "Set Details", desc: "Give your NFT a name, description, and royalty settings.", emoji: "🛠️" },
            { title: "Connect Wallet", desc: "Securely connect MetaMask or any supported wallet.", emoji: "🔗" },
            { title: "Mint", desc: "Click mint and watch your NFT come alive on the blockchain.", emoji: "🪄" },
            { title: "Share", desc: "Showcase your creation on social media or marketplaces.", emoji: "🚀" },
          ].map((step, i) => (
            <div key={i} className="relative pl-10" data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                <span>{step.emoji}</span> {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
  );
}