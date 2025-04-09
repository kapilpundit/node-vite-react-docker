import React from "react";
import bannerImage from "../assets/banner.jpg";

interface BannerProps {
  title: string;
  longText?: string;
}

const Banner: React.FC<BannerProps> = ({ title, longText }) => {
  return (
    <>
      <section className="w-full py-20 min-h-[400px] text-white relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-8 py-10">
          <h2 className="text-5xl font-bold">{title}</h2>
          {longText && <p className="text-xl mt-2">{longText}</p>}
          <a
            href="#features"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
