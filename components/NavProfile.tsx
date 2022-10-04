import { useAuth } from "lib/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";

const NavProfile = (): JSX.Element => {
  const { user, loading } = useAuth();

  return (
    <div
      className={
        "flex justify-center items-center w-12 h-12 text-3xl rounded-full " +
        (loading
          ? // Loading vvv
            "bg-slate-200 text-slate-400 animate-pulse"
          : user
          ? user.photoURL
            ? // User w/ Profile vvv
              ""
            : // User w/out Profile vvv
              "bg-blue-200 text-blue-500"
          : // No User vvv
            "bg-slate-300 text-slate-500")
      }
    >
      <Link href={loading ? "/" : user ? "/profile" : "/login"}>
        <a>
          {loading || !user?.photoURL ? (
            <BsFillPersonFill />
          ) : (
            <Image
              src={user.photoURL}
              alt="Profile photo"
              loading="eager"
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              className="rounded-full"
            />
          )}
        </a>
      </Link>
    </div>
  );
};

export default NavProfile;
