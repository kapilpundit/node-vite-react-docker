import bannerImage from "../assets/banner.jpg";

interface BannerProps {
  title: string;
  subtitle?: string;
  longText?: string;
}

const Banner = ({ title, subtitle, longText }: BannerProps) => {
  return (
    <>
      {/* <section className="w-full py-20 min-h-[400px] bg-blue-600 text-white"> */}
      <section className="w-full py-20 min-h-[400px] text-white relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-8 py-10">
          <h2 className="text-5xl font-bold">{title}</h2>
          {subtitle && (
            <h3 className="text-3xl font-semibold mt-2">{subtitle}</h3>
          )}
          {longText && <p className="text-xl mt-2">{longText}</p>}
          <a
            href="#"
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
