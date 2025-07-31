
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const faqs = [
  {
    question: "What is an NFT?",
    answer:
      "An NFT (Non-Fungible Token) is a unique cryptographic asset stored on the blockchain. It certifies ownership and authenticity of a digital item such as artwork, music, videos, and more.",
  },
  {
    question: "Which wallets can I use to mint?",
    answer:
      "You can connect any Ethereum-compatible wallet such as MetaMask, Trust Wallet, or use WalletConnect for broader support.",
  },
  {
    question: "What are the minting fees?",
    answer:
      "Minting fees vary based on network congestion. We display estimated gas fees during the minting process for full transparency.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500" data-aos="zoom-in">
          Frequently Asked Questions
        </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left text-white"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-300 transform transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}