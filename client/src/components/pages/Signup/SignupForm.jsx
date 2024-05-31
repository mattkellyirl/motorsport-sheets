import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/motorsport-sheets.png";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/graphql", {
        // Update to correct URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation AddUser($email: String!, $password: String!) {
              addUser(email: $email, password: $password) {
                token
                user {
                  _id
                  email
                }
              }
            }
          `,
          variables: { email, password },
        }),
      });

      const result = await response.json();
      console.log(result); // Log the entire result for debugging

      if (result.errors) {
        console.error("GraphQL errors:", result.errors);
        result.errors.forEach((error) => {
          console.error(error.message, error);
        });
        setMessage(`Signup failed: ${result.errors[0].message}`);
      } else if (result.data && result.data.addUser) {
        localStorage.setItem("token", result.data.addUser.token);
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        console.error("Unexpected response format:", result);
        setMessage("Signup failed: Unexpected response format");
      }
    } catch (error) {
      console.error("Signup failed:", error.message);
      setMessage(`Signup failed: ${error.message}`);
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
              Signup
            </h1>
            {message && <p className="text-center text-red-500">{message}</p>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Signup
              </button>
              <p className="text-sm font-light text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-black hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
