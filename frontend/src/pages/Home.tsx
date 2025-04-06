import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner
        title="Secure Your Future Today"
        longText="Comprehensive insurance solutions tailored to your needs."
      />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

    </div>
  );
};

export default Home;
