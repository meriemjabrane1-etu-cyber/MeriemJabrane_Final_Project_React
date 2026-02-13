import React from "react";

export default function cont() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-gray-500 mb-8">
          Home <span className="mx-2">&gt;</span> Account
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border bg-white p-10">
            <h2 className="text-4xl font-light mb-4">New Customer</h2>
            <h3 className="text-lg font-medium mb-4">Register Account</h3>

            <p className="text-gray-500 leading-7 mb-8">
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>

            <button className="bg-black text-white px-10 py-3 hover:bg-gray-800 transition">
              CONTINUE
            </button>
          </div>

          <div className="border bg-white p-10">
            <h2 className="text-4xl font-light mb-4">Returning Customer</h2>
            <p className="text-gray-600 mb-6">I am a returning customer</p>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <p className="text-gray-500 text-sm cursor-pointer hover:underline">
                Forgot your password?
              </p>

              <div className="flex items-center gap-4">
                <button className="bg-black text-white px-10 py-3 hover:bg-gray-800 transition">
                  SIGN IN
                </button>

                <span className="text-gray-500">
                  or{" "}
                  <span className="hover:underline cursor-pointer">
                    Return to Store
                  </span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
