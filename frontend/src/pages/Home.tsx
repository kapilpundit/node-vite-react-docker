import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <Banner title="Welcome to Our Website" longText="Explore our services and offerings" />

      {/* Features Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-gray-600 mt-2">Description about this feature.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Feature 2</h3>
            <p className="text-gray-600 mt-2">Description about this feature.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Feature 3</h3>
            <p className="text-gray-600 mt-2">Description about this feature.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
