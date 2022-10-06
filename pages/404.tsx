import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <main className="mt-64 flex flex-col items-center justify-center">
      <h1 className="text-center text-6xl font-bold">404 - Page Not Found</h1>
      <Link href="/">
        <a className="text-center text-3xl font-medium w-full hover:underline">
          Return to Home
        </a>
      </Link>
    </main>
  );
};

export default Page;
