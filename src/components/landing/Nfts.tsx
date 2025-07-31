
export default function FeaturedNFTs() {

  return (
      <section className="py-24 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500" data-aos="zoom-in">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* NFT 1 */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-transform hover:scale-105 hover:shadow-pink-500/30 duration-300"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?t=st=1753973547~exp=1753977147~hmac=9b4635ae6ce993a7c79a6b5c10bfe213a6e50e808f463f4d2bdc0d3bc4a5eddc&w=2000"
              alt="Naughty Ape #3021"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Naughty Ape #3021</h3>
              <p className="text-sm text-gray-400 mb-4">Forged in the pixel dojo, this warrior is one-of-a-kind. Own a slice of the metaverse.</p>
              <div className="flex justify-between items-center text-sm text-gray-300">
                <span>Minted by <strong>0xA7...4C9</strong></span>
                <span>Ξ 0.24</span>
              </div>
            </div>
          </div>

          {/* NFT 2 */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-transform hover:scale-105 hover:shadow-purple-500/30 duration-300"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <img
              alt="Dabb Boy #4411"
              src="https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?t=st=1753973062~exp=1753976662~hmac=ba2152a1d77c8a7eb937a3bab1ae6f74c01bfb708843695f70b53c5b377f5a09&w=2000"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Dabb Boy #4411</h3>
              <p className="text-sm text-gray-400 mb-4">An experimental pixel primate NFT from the jungle of Web3. A true collector’s gem.</p>
              <div className="flex justify-between items-center text-sm text-gray-300">
                <span>Minted by <strong>0xB2...91E</strong></span>
                <span>Ξ 0.18</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
