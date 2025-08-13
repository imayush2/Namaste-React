import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const Online = useOnlineStatus();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div>
          <img src={LOGO_URL} alt="logo" className="w-24 h-16 object-contain" />
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex items-center gap-6 text-base font-medium">
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  Online ? "bg-green-500" : "bg-red-500"
                } animate-pulse`}
              ></span>
              <span className="text-sm font-medium text-gray-700">
                {Online ? "Online" : "Offline"}
              </span>
            </div>
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                Cart
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login")
                }
                className="bg-red-500 text-white px-3 py-1.5 rounded-md text-sm hover:bg-red-600 transition-colors duration-200"
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
