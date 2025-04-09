import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TopMenuItems = ({ onClick }: { onClick?: () => void }) => {
  const location = useLocation();

  const menuLinks = [
    { path: "/", label: "Home", title: "Home - Insurance Portal" },
    { path: "/about", label: "About", title: "About Us - Insurance Portal" },
    { path: "/services", label: "Services", title: "Our Services - Insurance Portal" },
    { path: "/contact", label: "Contact", title: "Contact Us - Insurance Portal" },
  ];

  useEffect(() => {
    const currentPath = menuLinks.find(link => link.path === location.pathname);
    document.title = currentPath?.title || 'Insurance Portal';
  }, [location.pathname]);

  return (
    <>
      {
        menuLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (<li
              key={item.path}
              onClick={onClick}
              className={`block px-3 py-3 rounded-md transition duration-300 ${
                isActive ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          )
        }
      )}
    </>
  );
};

export default TopMenuItems;
