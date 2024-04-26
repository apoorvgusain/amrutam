import { Link } from "react-router-dom";
import LOGO from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="w-full bg-[#FFF7E2] flex justify-between px-12 ">
      <div className="flex justify-between space-x-10 ">
        <div className="py-5">
          <img src={LOGO} alt="logo" className=" w-50 h-10" />
        </div>

        <nav>
          <ul className="flex justify-between space-x-8 py-7 font-semibold text-gray-600">
            <li>
              <Link>Home</Link>
            </li>

            <li className="font-bold text-green-800">
              <Link>Find Doctors</Link>
            </li>

            <li>
              <Link>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between space-x-2 ">
        <button className="border-2  rounded-lg px-7 my-5 border-green-800 text-green-800">
          Login
        </button>
        <button className="border-2 border-green-800 rounded-lg px-7  my-5 bg-green-800 text-white font-semibold">
          Sign-up
        </button>
      </div>
    </div>
  );
};
export default Header;
