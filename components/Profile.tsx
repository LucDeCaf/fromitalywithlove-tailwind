import { useAuth } from "lib/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";

const Profile = (): JSX.Element => {
  const { user, loading } = useAuth();

  return (
    <div
      className={
        "flex justify-center items-center w-full h-full rounded-full " +
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
    </div>
  );
};

export default Profile;
