import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <a className="text-xl text-blue-950"> PixGen</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-2 px-1">
          <Link className="text-xl flex items-center gap-0.5" to="/">
            <FaHome></FaHome>Home
          </Link>
          {/* <Link>
            <a>GENERATE IMAGES</a>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
