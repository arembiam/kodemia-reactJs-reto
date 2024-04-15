import { useRouter } from "next/router";
import { useState } from "react";

import { FaApple, FaGithub, FaTwitter, FaSquare } from "react-icons/fa";
import Link from "next/link";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://dummyjson.com/auth/login", {
      method: POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((Response) => Response.json())
      .then((json) => {
        console.log(json);

        if (json.token) {
          localStorage.setItem("token", json.token); //CAMBIAR A SESSION STORAGE
          setUsername("");
          setPassword("");
          router.replace("/");
          return;
        }
        setError("An error has occurred");
      })
      .catch((error) => {
        console.error("Login error", error);
      });
  }

  return (
    <main className="flex p-10 justify-center items-center">
      <div className="flex flex-col items-center">
        {/* TITULO DEV  */}
        <Link href="/">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt=""
            className="h-11 w-auto"
          />
        </Link>

        {/* PAGE HEADER */}
        <div className="flex-col p-4">
          <h1 className="text-center text-3xl font-sans font-bold">
            Join the DEV Community
          </h1>
          <p className="text-center font-sans text-md text-gray-700">
            DEV Community is a community of 1,391,112 amazing developers
          </p>
        </div>
        {/* LOGIN CON  OTRAS CUENTAS */}
        <div className="flex flex-col gap-3 w-96 justify-center">
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaApple />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with Apple
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaSquare />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with Forem
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaGithub />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with GitHub
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl text-cyan-500">
              <FaTwitter />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with Twitter
            </span>
          </button>
        </div>
        {/* DIVISION OR */}
        <div className="w-96 p-6">
          <p className="text-center font-sans text-sm text-gray-700">OR</p>
        </div>
        {/* FORMULARIO CORREO */}
        <div className="flex flex-col w-96 justify-center">
          <p className="text-left text-sm font-sans font-semibold py-2">
            Username
          </p>
          <input
            type="text"
            required
            class="border border-gray-300 rounded-md w-96 p-1 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-700"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <p className="text-left text-sm font-sans font-semibold py-2">
            Password
          </p>
          <input
            type="password"
            required
            class="border border-gray-300 rounded-md w-96 p-1 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-700"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <div className="flex flex-col justify-center">
            <div className="flex py-2">
              <span className="font-sans text-sm text-gray-700 w-60">
                Remember me
              </span>
              <span className="font-sans text-sm text-blue-700">
                Forgot password?
              </span>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className="flex w-96 p-2 justify-center bg-blue-700 rounded-md text-white font-sans font-semibold text-sm
                "
            >
              Log in
            </button>
          </div>
        </div>
        {/* FOOTER LEGALES */}
        <div className="flex flex-col p-8 ">
          <div className="pb-3">
            <p className="text-center font-sans italic text-sm text-gray-500">
              By signing up, you are agreeing to our{" "}
              <Link href="" className="text-blue-700">
                privacy policy
              </Link>
              ,{" "}
              <Link href="" className="text-blue-700 text-wrap">
                terms of use
              </Link>{" "}
              and{" "}
              <Link href="" className="text-blue-700">
                code of conduct
              </Link>
              .
            </p>
          </div>

          <div className="border-t border-gray-300 py-4">
            <p className="text-center font-sans text-sm text-gray-700">
              New to DEV Community?{" "}
              <Link href="" className="text-blue-700">
                Create account.
              </Link>
            </p>
          </div>
        </div>
        {/* END OF PAGE */}
      </div>
    </main>
  );
}
