import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { AdminContext } from "../context/AdminContext";
import { loggin } from "../services/AuthServices"

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
        <div className="flex min-h-screen bg-c-white-1  flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="bg-[white] rounded-lg overflow-hidden shadow-lg sm:mx-auto sm:w-full sm:max-w-md pt-8 ">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="./assets/images/Logo.svg"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
                Nhập thông tin để tiếp tục
              </h2>
              {valid && (
                <div className="w-full h-12 flex shadow-sm border bg-[#e9a1a1] border-c-red-1 text-center mt-4">
                  <h2 className=" capitalize font-bold  m-auto">
                    Tài khoản hoặc mật khẩu của bạn đã sai
                  </h2>
                </div>
              )}
            </div>

            <div>
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(login)}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tài khoản
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Nhập tài khoản của bạn"
                        autoComplete="username"
                        {...register("username", {
                          required: true,
                        })}
                        className="block w-full px-3 py-2.5 mt-2 rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm"
                      />
                    </div>
                    {errors.username && errors.username.type === "required" && (
                      <p className="mt-2 text-sm text-[red]" id="email-error">
                        Tài khoản không hợp lệ
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu của bạn"
                        autoComplete="current-password"
                        {...register("password", {
                          required: true,
                        })}
                        className="block w-full px-3 py-2.5 mt-2 rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm"
                      />
                    </div>
                    {errors.password && errors.password.type === "required" && (
                      <p className="mt-2 text-sm text-[red]" id="email-error">
                        Mật khẩu của bạn không hợp lệ
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
                        Nhớ mật khẩu
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Quên Mật Khẩu
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center  border border-transparent c-bg-linear py-2 px-4 text-sm font-medium text-[white] rounded-[30px] shadow-sm hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Đăng Nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}