import { useState } from "react";
import Link from "next/link";
import NavProfile from "./NavProfile";
import MenuItem from "./MenuItem";
import { HiMenu } from "react-icons/hi";
import { nanoid } from "nanoid";

interface NavItemType {
  name: string;
  url: string;
}

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState<boolean | null>(null);

  const NavItems: NavItemType[] = [
    {
      name: "Gallery",
      url: "/gallery",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Plantastic",
      url: "/plantastic",
    },
  ];

  return (
    <nav className="sticky top-0 h-20 z-50 grid">
      <div className="bg-slate-100 z-50 grid grid-cols-3 items-center py-3 px-6 font-poppins">
        <div className="justify-self-start text-center">
          <Link href="/">
            <a className="text-xl italic font-medium text-center font-cursive whitespace-nowrap">
              From Italy,
              <br />
              With Love
            </a>
          </Link>
        </div>
        <div className="justify-self-center w-full flex justify-center">
          <div className="sm:grid hidden grid-flow-col w-max">
            {NavItems.map((NavItem) => (
              <Link key={nanoid()} href={NavItem.url}>
                <a className="flex justify-center items-center px-2 text-xl">
                  {NavItem.name}
                </a>
              </Link>
            ))}
          </div>
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
        <div className="sm:hidden block z-40 absolute top-20">
          <ul onClick={() => setShowMenu(false)}>
            {NavItems.map((NavItem) => (
              <MenuItem key={nanoid()} href={NavItem.url}>
                {NavItem.name}
              </MenuItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
