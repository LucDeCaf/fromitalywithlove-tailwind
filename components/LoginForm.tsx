import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { useAuth } from "lib/AuthContext";

const LoginForm = (): JSX.Element => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      login(formData.email, formData.password);
    } catch (err: any) {
      const code = err.code;
      console.log(code);
    }
  };

  return (
    <div className="items-center sm:w-96 w-full h-auto p-4 border-[3px] border-blue-600 font-poppins rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Login to your account</h1>
      <form onSubmit={handleSubmit} className="grid grid-rows-3 grid-cols-2">
        <div className="flex flex-col row-start-1">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="jd@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
            className="appearance-none border-2 rounded-md border-blue-300 pl-1"
          />
        </div>
        <div className="flex flex-col row-start-2">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
            className="appearance-none border-2 rounded-md border-blue-300 pl-1"
          />
        </div>
        <div className="row-start-3 col-span-2">
          <p className="text-neutral-500">
            Don&apos;t have an account?&nbsp;
            <Link href="/signup">
              <a className="text-blue-500 hover:text-blue-600 underline">
                Create an account
              </a>
            </Link>
          </p>
          <div className="flex justify-center mt-1">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
