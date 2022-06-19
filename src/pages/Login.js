import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/auth";
const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { loginError, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white w-full shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">Quiz App</h3>
        <div className="flex flex-col items-start mt-6">
          {loginError && (
            <p className="text-red-400 text-center">{loginError}</p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <div className="mt-4">
              <label className="block" for="email">
                Email
              </label>
              <input
                autocomplete="username"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors?.email && (
                <span className="text-xs text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors?.password && (
                <span className="text-xs text-red-400">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account ?{" "}
              <Link to={"/register"} className="text-blue-600 hover:underline">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
