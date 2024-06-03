import React, { useState } from "react";
import AuthService from "../../../utils/authService";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../utils/mutations";
import logo from "../../../../assets/motorsport-sheets.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const handleUserLogin = async (event) => {
    event.preventDefault();
    console.log("Login attempt with email:", email);

    try {
      const { data } = await loginUser({
        variables: { email, password },
      });

      // DEBUGGING
      // console.log("Server response:", data);

      if (!data) {
        console.error("Request Failed - No Login Data Recieved");
        return;
      }

      if (!data.loginUser) {
        console.error("Request Failed - No loginUser Data received");
        return;
      }

      if (!data.loginUser.token) {
        console.error("Request Failed - No Token Received");
        return;
      } else {
        const { token: userToken } = data.loginUser;
        AuthService.login(userToken);
        console.log("Request Successful - User Logged In");
      }
    } catch (error) {
      console.error("Request Failed - Logging In User:", error.message);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6">
          <img className="h-12" src={logo} alt="logo" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleUserLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-black hover:underline"
                >
                  Signup here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
