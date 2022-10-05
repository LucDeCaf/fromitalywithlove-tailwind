import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "lib/AuthContext";

const Page: NextPage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function logoutAndReturn() {
      if (!loading) {
        if (user) {
          await logout();
        }
        router.push("/");
      }
    }
    logoutAndReturn();
  }, [user, loading, logout, router]);

  return <h1 className="mt-10 text-5xl font-bold text-center">Loading...</h1>;
};

export default Page;
