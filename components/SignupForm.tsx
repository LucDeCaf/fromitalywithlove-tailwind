import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { useAuth } from "lib/AuthContext";

const SignupForm = (): JSX.Element => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    try {
      signup(formData.username, formData.email, formData.password);
    } catch (err: any) {
      const code = err.code;
      console.log(code);
    }
  };

  return (
    <div className="items-center sm:w-96 w-full h-auto p-4 border-[3px] border-blue-600 font-poppins rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Create an account</h1>
      <form onSubmit={handleSubmit} className="grid grid-rows-4 grid-cols-2">
        <div className="flex flex-col row-start-1">
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="John Doe"
            value={formData.username}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                username: e.target.value,
              }))
            }
            className="appearance-none border-2 rounded-md border-blue-300 pl-1"
          />
        </div>
        <div className="flex flex-col row-start-2">
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
        <div className="flex flex-col row-start-3">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="P@ssw0rd"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*\s).{8,}"
            title="Must contain at least one number, one letter, no spaces,
             and at least 8 or more characters"
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
        <div className="row-start-4 col-span-2">
          <p className="text-neutral-500">
            Already have an account?&nbsp;
            <Link href="/login">
              <a className="text-blue-500 hover:text-blue-600 underline">
                Login
              </a>
            </Link>
          </p>
          <div className="flex justify-center mt-1">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
