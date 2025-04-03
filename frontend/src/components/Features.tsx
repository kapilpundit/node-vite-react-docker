export default function Features() {
  return (
    <>
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Life Insurance</h3>
            <p className="text-gray-600 mt-2">
              Description about this feature.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Car Insurance</h3>
            <p className="text-gray-600 mt-2">
              Description about this feature.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Business Insurance</h3>
            <p className="text-gray-600 mt-2">
              Description about this feature.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
