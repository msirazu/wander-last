const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-12 md:py-16">

      <div className="max-w-7xl mx-auto">

        {/* Brand Section */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Wanderlast
          </h1>
          <p className="mt-4 max-w-xl mx-auto md:mx-0">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-800 px-3 py-2 md:px-4 md:py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <span className="text-white text-lg cursor-pointer">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Destinations</li>
              <li className="hover:text-white cursor-pointer">My Bookings</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li>786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-center md:text-left">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex gap-5 text-white text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;