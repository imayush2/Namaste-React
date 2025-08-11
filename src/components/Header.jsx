import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="flex items-center justify-between px-4 py-2 border-1 ">
        {/* Logo */}
        <div>
          <img
            src={LOGO_URL}
            alt="logo"
            className="w-[100px] h-[80px] object-cover"
          />
        </div>
  
        {/* Navigation Menu */}
        <div>
          <ul className="flex gap-10 text-lg font-medium">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
            <li className="">Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  