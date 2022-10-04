import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "components/Profile";
import MenuItem from "./MenuItem";
import { HiMenu } from "react-icons/hi";

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  return (
    <nav className="sticky top-0 h-20 z-50 grid">
      <div className="bg-slate-100 z-50 grid grid-cols-3 items-center py-3 px-6 font-karla">
        <span className="relative w-20 justify-self-start">
          <Link href="/">
            <a>
              <Image
                src="/vercel.svg"
                alt="Logo"
                layout="responsive"
                objectFit="contain"
                width={156}
                height={78}
              />
            </a>
          </Link>
        </span>
        <div className="justify-self-center">
          <div className="sm:block hidden">
            Navigation
          </div>
          <div className="sm:hidden block">
            <Profile />
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
            <Profile />
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
