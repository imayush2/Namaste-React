import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const Online = useOnlineStatus();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={LOGO_URL} alt="Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyApp
          </span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap items-center gap-6 text-base font-medium mt-4 md:mt-0">
            {/* Online status */}
            <li className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  Online ? "bg-green-500" : "bg-red-500"
                } animate-pulse`}
              ></span>
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                {Online ? "Online" : "Offline"}
              </span>
            </li>

            {/* Nav Links */}
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-red-500 dark:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-500 dark:text-white transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-500 dark:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-red-500 dark:text-white transition-colors duration-200"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="text-gray-700 hover:text-red-500 dark:text-white transition-colors duration-200"
              >
                Grocery
              </Link>
            </li>

            {/* Login/Logout Button */}
            <li>
              <button
                onClick={() =>
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
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
