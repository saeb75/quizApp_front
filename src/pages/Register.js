import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/auth";

const Register = () => {
  const { registerError, loading } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white w-full shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">Quiz App</h3>
        <div className="flex flex-col items-start mt-6">
          {registerError && (
            <p className="text-red-400 text-center">{registerError}</p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <div>
              <label>Name</label>
              <input
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name must be at most 20 characters",
                  },
                })}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors?.name && (
                <span className="text-xs text-red-400">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label>Username</label>
              <input
                {...register("userName", {
                  required: { value: true, message: "Name is required" },
                  minLength: {
                    value: 3,
                    message: "userName must be at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "userName must be at most 20 characters",
                  },
                })}
                autoComplete="off"
                type="text"
                placeholder="userName"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors?.userName && (
                <span className="text-xs text-red-400">
                  {errors.userName.message}
                </span>
              )}
            </div>
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
                name="email"
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
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters and contain at least one number, one uppercase letter and one special character",
                  },
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
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors?.confirmPassword && (
                <span className="text-xs text-red-400">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex">
              <button
                disabled={loading}
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account ?{" "}
              <Link to={"/login"} className="text-blue-600 hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
