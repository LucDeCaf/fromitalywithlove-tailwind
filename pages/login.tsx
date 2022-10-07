import { NextPage } from "next";
import LoginForm from "components/LoginForm";
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

  if (loading) return <LoadingPage />;

  return (
    <main className="flex justify-center p-4">
      <LoginForm />
    </main>
  );
};

export default Page;
