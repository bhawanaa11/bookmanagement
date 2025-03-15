import { Link,useLocation } from "react-router";

function Navbar() {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname==="/signup" ) {
    return null;
  }

  return (
    <>
    <nav className="bg-[#5A7D7C] flex justify-between items-center px-4 py-2 text-xl">
      <Link to={"/"}>
        <label className="  text-white font-bold tracking-wider text-xl cursor-pointer">
          BookLog
        </label>
        
      </Link>
      
      
      <div className="flex items-center space-x-5">
        <Link to={"/login"}>
          <span className=" text-white font-semibold">Log In</span>
        </Link>
        
        
      </div>
    </nav>
    <div className="flex justify-center items-center h-screen bg-[#232C33] text-white text-2xl font-bold text-center p-5">
      "Turn Pages, Not Problems – Smart Book Management with BookLog!"
    </div>
</>
  );
}

export default Navbar;