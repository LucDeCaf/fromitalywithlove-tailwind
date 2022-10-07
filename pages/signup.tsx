import { NextPage } from "next";
import SignupForm from "components/SignupForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "lib/AuthContext";
import LoadingPage from "components/LoadingPage";

const Page: NextPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  if (loading) {
    return <LoadingPage />
  } else {
    return (
      <main className="flex justify-center p-4">
        <SignupForm />
      </main>
    );
  }
};

export default Page;
