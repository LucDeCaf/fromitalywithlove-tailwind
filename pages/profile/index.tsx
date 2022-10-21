import { useAuth } from "lib/AuthContext";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingPage from "components/LoadingPage";
import Profile from "components/Profile";
import { User } from "firebase/auth";

const ProfilePage = ({ user }: { user: User }): JSX.Element => {
  const [editDetails, setEditDetails] = useState({
    username: false,
    email: false,
  });

  const toggleEditing = (field: "username" | "email") =>
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [field]: !prevDetails[field],
    }));

  return (
    <main className="p-4 px-64 font-poppins">
      <div className="relative w-48 h-48 text-8xl mx-auto mb-4">
        <Profile />
        {/* <button className="absolute right-0 bottom-0 text-6xl bg-blue-400 active:bg-blue-500 w-16 h-16 rounded-full">
          +
        </button> */}
      </div>
      <div
        className="mx-auto w-1/2 space-y-2 justify-center text-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block">
          Username: <span className="italic">{user.displayName!}</span>
        </label>
        <label className="block">
          Email: <span className="italic">{user.email!}</span>
        </label>
        <label className="block">
          Password:{" "}
          <span className="italic">
            **********
          </span>
        </label>
      </div>
      <div className="mt-2 flex justify-center">
        <Link href="/logout">
          <a className="text-xl bg-blue-500 active:bg-blue-400 text-white rounded-md px-2 py-1">
            Logout
          </a>
        </Link>
      </div>
    </main>
  );
};

const Page: NextPage = () => {
  const router = useRouter();
  const [replaced, setReplaced] = useState<boolean>(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!(loading || user) && !replaced) {
      router.replace("/login");
      setReplaced(true);
    }
  }, [user, loading]);

  if (loading || !user) return <LoadingPage />;

  return <ProfilePage user={user} />;
};

export default Page;
