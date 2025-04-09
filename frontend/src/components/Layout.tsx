import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the menu icon
import TopMenuItems from "./TopMenuItems";
import Footer from "./Footer";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 w-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-blue-300">Insurance</h1>
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
      <Footer year="2025" name="Insurance Website" />
    </div>
  );
};

export default Layout;
