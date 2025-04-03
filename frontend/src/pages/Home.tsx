import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner
        title="Welcome to Our Website"
        subtitle=""
        longText="Explore our services and offerings"
      />

      {/* Features Section */}
      <Features />

    </div>
  );
};

export default Home;
