import { useAuth } from "lib/AuthContext";
import Link from "next/link";
import Profile from "./Profile";

const NavProfile = (): JSX.Element => {
  const { user, loading } = useAuth();

  return (
    <Link href={loading ? "/" : user ? "/profile" : "/login"}>
      <a>
        <div className="w-12 h-12 text-3xl">
          <Profile />
        </div>
      </a>
    </Link>
  );
};

export default NavProfile;
