import { useState } from "react";
import Link from "next/link";
import NavProfile from "./NavProfile";
import MenuItem from "./MenuItem";
import { HiMenu } from "react-icons/hi";

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  return (
    <nav className="sticky top-0 h-20 z-50 grid">
      <div className="bg-slate-100 z-50 grid grid-cols-3 items-center py-3 px-6 font-poppins">
        <div className="justify-self-start text-center">
          <Link href="/">
            <a className="text-2xl italic font-medium text-center font-cursive sm:whitespace-nowrap">
              From Italy, With Love
            </a>
          </Link>
        </div>
        <div className="justify-self-center">
          <div className="sm:block hidden">Navigation</div>
          <div className="sm:hidden block">
            <NavProfile />
          </div>
        </div>
        <div className="justify-self-end">
          <span
            className="sm:hidden block text-4xl cursor-pointer"
            onClick={() => setShowMenu((shown) => !shown)}
          >
            <HiMenu />
          </span>
          <div className="sm:block hidden">
            <NavProfile />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="sm:hidden block z-40 absolute top-16">
          <ul onClick={() => setShowMenu(false)}>
            <MenuItem href="/">Home</MenuItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
