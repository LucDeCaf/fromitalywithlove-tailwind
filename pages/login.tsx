import { NextPage } from "next";
import LoginForm from "components/LoginForm";

const Page: NextPage = () => {
  return (
    <main className="flex justify-center p-4">
      <LoginForm />
    </main>
  )
}

export default Page;
