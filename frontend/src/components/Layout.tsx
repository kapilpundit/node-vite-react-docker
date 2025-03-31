import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the menu icon

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8">
          <h1 className="text-xl font-bold text-blue-600">My Website</h1>
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button (Font Awesome Bars Icon) */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>

          {/* Mobile Menu (Visible when toggled) */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col space-y-4 px-8 py-4 bg-white shadow-md">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6">
        <p className="text-center">&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
