import { Link } from "react-router-dom";

const TopMenuItems = ({ onClick }: { onClick?: () => void }) => {
  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {
        menuLinks.map((item) => {
          return (<li
            key={item.path}
            onClick={onClick}
            className="block px-3 py-3 rounded-md text-blue-600 hover:bg-blue-600 hover:!text-white transition duration-300"
          >
            <Link to={item.path}>{item.label}</Link>
          </li>)
        }
      )}
    </>
  );
};

export default TopMenuItems;
