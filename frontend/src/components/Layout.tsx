import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the menu icon
import TopMenuItems from "./TopMenuItems";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8">
          <h1 className="text-xl font-bold text-blue-600">My Website</h1>
          <ul className="hidden md:flex space-x-6">
            <TopMenuItems />
          </ul>

          {/* Mobile Menu Button (Font Awesome Bars Icon) */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon
              icon={mobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>

          {/* Full-screen Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
              <button
                className="absolute top-4 right-6 text-gray-600 hover:text-blue-600 text-2xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <ul className="flex flex-col space-y-6 text-2xl text-center">
                <TopMenuItems onClick={() => setMobileMenuOpen(false)} />
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6">
        <p className="text-center">
          &copy; 2025 My Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
