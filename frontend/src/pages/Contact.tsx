import Banner from "../components/Banner";
import Features from "../components/Features";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner
        title="We’re Here to Help"
        longText="Reach out with your questions, concerns, or feedback — we’re just a message away."
      />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>
    </div>
  );
}
