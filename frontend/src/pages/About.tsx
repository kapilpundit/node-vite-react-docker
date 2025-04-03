import Banner from "../components/Banner";
import Features from "../components/Features";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner
        title="Welcome to Our Website"
        subtitle="About"
        longText="Learn more about our mission and values"
      />

      {/* Features Section */}
      <Features />
    </div>
  );
}
