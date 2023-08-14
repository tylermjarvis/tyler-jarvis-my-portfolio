import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto text-right p-5 bg-amber-700">
      <ul className="text-center inline-grid gap-x-2 grid-cols-2 mr-10 text-white">
        <li className="p-2">
          <Link to="/" className="hover:text-sky-300">
            Home
          </Link>
        </li>
        <li className="p-2">
          <Link to="/about-me" className="hover:text-sky-300">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;