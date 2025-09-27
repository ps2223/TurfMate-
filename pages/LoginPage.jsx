import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Image/Content */}
      <div className="hidden lg:flex w-1/2 bg-blue-600 items-center justify-center p-12">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to TurfMate</h2>
          <p className="text-lg">
            TurfMate is your ultimate sports companion, making turf booking faster and smarter. Whether you want to play football, cricket, or any game, we connect you to the best grounds near you. No more calling and waiting—just book your slot in seconds. You can even find teammates and build your squad through the app. With TurfMate, the game starts the moment you decide to play.
          </p>
          <img
            src="https://editorial.uefa.com/resources/0284-18de0a80e0dd-250e8943258f-1000/ucl_group_stage_20230831142217.jpeg"
            alt="Football illustration"
            className="mt-8 max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
          {/* Page Header */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Login to <span className="text-blue-600">TurfMate</span>
          </h1>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-500">OR</div>

          {/* Social Login */}
          <button className="w-full border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
