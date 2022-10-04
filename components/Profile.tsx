import { useAuth } from "lib/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";

const Profile = (): JSX.Element => {
  const { user, loading } = useAuth();

  return (
    <>
      {loading ? (
        <div className="p-2 bg-slate-300 text-slate-500 animate-pulse rounded-full text-5xl">
          <BsFillPersonFill />
        </div>
      ) : user ? (
        <div>User found</div>
      ) : (
        <div className="flex items-center w-12 h-12 p-2 bg-slate-300 text-slate-500 rounded-full text-5xl">
          <BsFillPersonFill />
        </div>
      )}
    </>
  );
};

export default Profile;
