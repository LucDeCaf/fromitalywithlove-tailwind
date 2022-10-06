import Link from "next/link";
import { MenuItemType } from "lib/types";

const MenuItem = ({ children, href }: MenuItemType): JSX.Element => {
  return (
    <Link href={href}>
      <a>
        <li className="px-10 py-2 bg-teal-light active:bg-teal-dark active:text-white text-xl font-medium select-none w-screen">
          {children}
        </li>
      </a>
    </Link>
  );
};

export default MenuItem;
