import Banner from "../components/Banner";
import Features from "../components/Features";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner
        title="Welcome to Our Website"
        subtitle="Contact"
        longText="Get in touch with us today"
      />

      {/* Features Section */}
      <Features />
    </div>
  );
}
