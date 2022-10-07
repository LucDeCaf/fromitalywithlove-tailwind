import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "lib/AuthContext";
import LoadingPage from "components/LoadingPage";

const Page: NextPage = () => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    async function logoutAndReturn() {
      if (!loading) {
        if (user) {
          await logout();
        }
        if (!pushed) {
          router.push("/");
          setPushed(true);
        }
      }
    }
    logoutAndReturn();
  }, [user, loading, logout, router, pushed]);

  return <LoadingPage />;
};

export default Page;
