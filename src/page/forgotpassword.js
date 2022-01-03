import React from "react";

const ForgotPassword = () => {
  return (
    <div className="lg:flex h-screen">
      <div className="lg:w-1/2 lg:flex hidden justify-around" >
            <div
              className="forgotpasswordimg w-full h-auto bg-gray-400 hidden lg:flex lg:w-full bg-cover rounded-l-lg"
            />
      </div>
      <div className="w-full lg:w-1/2 bg-white justify-center items-center py-36 px-32">
        <div className=" text-center">
          <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
          <p className="mb-4 text-sm text-gray-700">
            We get it, stuff happens. Just enter your email address below and
            we'll send you a link to reset your password!
          </p>
        </div>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email Address..."
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset Password
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="/signup"
            >
              Create an Account!
            </a>
          </div>
          <div className="text-center">
            <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="/login"
            >
              Already have an account? Login!
            </a>
          </div>
        </form>
      </div>

    </div>
  );
}
export default ForgotPassword;