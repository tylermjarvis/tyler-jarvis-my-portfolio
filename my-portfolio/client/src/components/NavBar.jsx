import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container mx-auto text-right p-2 sm:p-5 bg-white">
      <ul className="text-center inline-grid gap-x-2 grid-cols-2 mr-10 text-neutral-500">
        <li className="p-2">
          <Link to="/" className="hover:text-cyan-600">
            Home
          </Link>
        </li>
        <li className="p-2">
          <Link to="/about-me" className="hover:text-cyan-600">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
