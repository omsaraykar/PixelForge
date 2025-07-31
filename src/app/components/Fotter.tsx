export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-300 py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    {/* Brand */}
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">PixelForge</h2>
      <p className="text-sm text-gray-400 leading-relaxed">
        Forge your digital masterpieces into eternal NFTs. Seamless, secure, and on-chain.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
        <li><a href="#how" className="hover:text-indigo-400 transition">How It Works</a></li>
        <li><a href="#nfts" className="hover:text-indigo-400 transition">Featured NFTs</a></li>
        <li><a href="#faq" className="hover:text-indigo-400 transition">FAQ</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
        <li><a href="#" className="hover:text-indigo-400 transition">Terms</a></li>
        <li><a href="#" className="hover:text-indigo-400 transition">Privacy</a></li>
        <li><a href="#" className="hover:text-indigo-400 transition">Support</a></li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
      <div className="flex space-x-5 mt-4">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
          <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.2 1.79 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.21-1.8-4-4-4zM8.5 17.5S7.25 16.75 6 15.5c0 0 1.88.9 3.12 1.13 0 0 .38-.25.88-.38-.5-.12-.88-.25-.88-.38 0 0-1.5-.25-2.62-.75 0 0 .12-.12.25-.25 0 0 1.25.62 2.5.88 0 0 .38-.62.88-1.25-.88-.25-1.75-.75-2.5-1.5-1.12-1.13-1.75-2.38-2-3.25 0 0 .5.12 1.12.25 0 0-.25-.88-.25-1.75 0-1.25.75-2 1.88-2 .38 0 .88.12 1.38.5.25-.12.62-.25 1-.25.38 0 .75.12 1 .25.5-.38 1-.5 1.38-.5 1.13 0 1.88.75 1.88 2 0 .88-.25 1.75-.25 1.75.62-.12 1.12-.25 1.12-.25-.25.88-.88 2.12-2 3.25-.75.75-1.62 1.25-2.5 1.5.5.62.88 1.25.88 1.25 1.25-.25 2.5-.88 2.5-.88.12.12.25.25.25.25-1.12.5-2.62.75-2.62.75 0 .13-.38.25-.88.38.5.12.88.38.88.38 1.25-.25 3.12-1.13 3.12-1.13-1.25 1.25-2.5 2-2.5 2H8.5z"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
          <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.72 0-4.924 2.203-4.924 4.917 0 .39.045.765.126 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.418-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.211 7.557 2.211 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.346 3.608 1.32.976.976 1.26 2.243 1.32 3.608.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.346 2.633-1.32 3.608-.976.976-2.243 1.26-3.608 1.32-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.346-3.608-1.32-.976-.976-1.26-2.243-1.32-3.608-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.062-1.366.346-2.633 1.32-3.608.976-.976 2.243-1.26 3.608-1.32 1.267-.058 1.647-.07 4.85-.07M12 0C8.741 0 8.332.013 7.053.072 5.775.131 4.697.388 3.757 1.328 2.818 2.268 2.561 3.347 2.503 4.625.013 5.904 0 6.312 0 12c0 5.688.013 6.096.072 7.375.058 1.278.316 2.357 1.256 3.297.94.94 2.019 1.198 3.297 1.256C8.332 23.987 8.741 24 12 24s3.668-.013 4.947-.072c1.278-.058 2.357-.316 3.297-1.256.94-.94 1.198-2.019 1.256-3.297.059-1.279.072-1.687.072-7.375s-.013-6.096-.072-7.375c-.058-1.278-.316-2.357-1.256-3.297-.94-.94-2.019-1.198-3.297-1.256C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
        </a>
      </div>
    </div>
  </div>

  <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} PixelForge. All rights reserved.
  </div>
</footer>

  );
}
