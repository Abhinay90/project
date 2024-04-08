import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changePasswordAsync } from "../../features/auth/authSlice";
import { useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";

export default function ChangePasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const password=watch('password')

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mx-auto h-10 w-auto">Your logo</div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Change Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit((data) => {
              dispatch(changePasswordAsync(data));
              console.log(data);
            })}
            noValidate
          >
            <div className="relative">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Old password
              </label>
              <div className="mt-2">
                <input
                  id="oldPassword"
                  {...register("oldPassword", {
                    required: "Old Password is required",
                  })}
                  type={showOldPassword ? "text" : "password"}
                  // onFocus={() => setShowPassword(!showPassword)}
                  // onBlur={() => setShowPassword(!showPassword)}
                  autoFocus
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
                {errors.oldPassword && (
                  <p className="text-red-500">{errors.oldPassword.message}</p>
                )}
              </div>
              <div className="text-2xl absolute top-9 right-5 cursor-pointer">
                    {showOldPassword === false ? (
                      <AiFillEyeInvisible onClick={()=>setShowOldPassword(!showOldPassword)} />
                    ) : (
                      <AiFillEye onClick={()=>setShowOldPassword(!showOldPassword)} />
                    )}
                  </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="newPassword"
                  {...register("newPassword", {
                    required: "New Password is required",
                  })}
                  type={showNewPassword ? "text" : "password"}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.newPassword && (
                  <p className="text-red-500">{errors.newPassword.message}</p>
                )}
              </div>
              <div className="text-2xl absolute top-9 right-5 cursor-pointer">
                    {showNewPassword === false ? (
                      <AiFillEyeInvisible onClick={()=>setShowNewPassword(!showNewPassword)} />
                    ) : (
                      <AiFillEye onClick={()=>setShowNewPassword(!showNewPassword)} />
                    )}
                  </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between ">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate:(value)=>value===password || "The Password does not match"
                  })}

                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  type={showConfirmPassword?"text":"password"}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              <div className="text-2xl absolute top-9 right-5 cursor-pointer">
                    {showConfirmPassword === false ? (
                      <AiFillEyeInvisible onClick={()=>setShowConfirmPassword(!showConfirmPassword)} />
                    ) : (
                      <AiFillEye onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>
                    )}
                  </div>
              </div>

            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
