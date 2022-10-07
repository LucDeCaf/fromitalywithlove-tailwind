import { useAuth } from "lib/AuthContext";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingPage from "components/LoadingPage";

const ProfilePage = () => {
  return (
    <main className="p-4 font-poppins">
      <h1 className="text-4xl font-semibold">Profile</h1>
      <h2 className="text-2xl font-medium">
        This page is under construction - for now, enjoy this logout button!
      </h2>
      <Link href="/logout">
        <a>
          <button className="text-xl mt-2 bg-blue-500 active:bg-blue-400 text-white rounded-md px-2 py-1">
            Logout
          </button>
        </a>
      </Link>
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

  return <ProfilePage />;
};

export default Page;
