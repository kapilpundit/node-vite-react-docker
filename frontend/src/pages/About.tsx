import Banner from "../components/Banner";
import Features from "../components/Features";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner
        title="Built on Trust and Commitment"
        longText="Delivering reliable insurance services backed by decades of experience."
      />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>
    </div>
  );
}
