import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-cyan-500 flex justify-between items-center px-4 py-2 text-xl">
      <Link to={"/"}>
        <label className="font-semibold tracking-wider text-xl cursor-pointer">
          Kitlib
        </label>
      </Link>
      <div className="flex items-center space-x-5">
        <Link to={"/login"}>
          <span>Log In</span>
        </Link>
        
        
      </div>
    </nav>
  );
}

export default Navbar;