// import Login from "../features/auth/Components/Login";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendMailAsync } from "../../features/auth/authSlice";

export default function ForgotPassword() {
  const dispatch=useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      Product Logo
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset Your Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit((data) => {
            dispatch(
              sendMailAsync({ email: data.email})
            );

            console.log(data);
          })}
          noValidate
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "Email not valid",
                  },
                  
                })}
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
            </div>
          </div>
      <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Reset Link
            </button>
        </form>
      </div>
    </div>
  );
}