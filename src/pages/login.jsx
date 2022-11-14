import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loggin } from "../components/services/AuthServices";
import { AdminContext } from "../context/AdminContext";

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [valid, setValid] = useState(false);

  const { currentUser, setCurrentUser } = useContext(AdminContext);

  const login = async (data) => {
    if (data.username !== "admin" && data.password !== "admin") {
      setValid(true);
      reset({
        username: "",
        password: "",
      });
    } else {
      try {
        const { data } = await loggin();
        setCurrentUser(data[0]);
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (currentUser) {
    router.push("/");
  } else {
    return (
      <>
        <div className="flex min-h-full  flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="./assets/images/Logo.svg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            {valid && (
              <div className="w-full h-12 flex shadow-sm border bg-[#e9a1a1] border-c-red-1 text-center mt-4">
                <h2 className=" capitalize font-bold  m-auto">
                  your username or password is not valid
                </h2>
              </div>
            )}
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit(login)}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      {...register("username", {
                        required: true,
                      })}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {errors.username && errors.username.type === "required" && (
                    <p className="mt-2 text-sm text-[red]" id="email-error">
                      username is required.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      {...register("password", {
                        required: true,
                      })}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {errors.password && errors.password.type === "required" && (
                    <p className="mt-2 text-sm text-[red]" id="email-error">
                      Your password is required.
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
