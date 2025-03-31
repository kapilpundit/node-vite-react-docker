import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
