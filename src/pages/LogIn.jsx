import { useForm } from "react-hook-form";
import { FaApple, FaGithub, FaTwitter, FaSquare } from "react-icons/fa";

export default function LogIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="flex p-10 justify-center items-center">
      <div className="flex flex-col items-center">
        {/* TITULO DEV  */}
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt=""
          className="h-11 w-auto"
        />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-left text-sm font-sans font-semibold py-2">
              Email
            </p>
            <input
              type="text"
              {...register("email")}
              required
              class="border border-gray-300 rounded-md w-96 p-1 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-700"
            />
            <p className="text-left text-sm font-sans font-semibold py-2">
              Password
            </p>
            <input
              type="password"
              maxLength={8}
              {...register("password")}
              required
              class="border border-gray-300 rounded-md w-96 p-1 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-700"
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
              <button
                type="submit"
                className="flex w-96 p-2 justify-center bg-blue-700 rounded-md text-white font-sans font-semibold text-sm
                "
              >
                Log in
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER LEGALES */}
        <div className="flex flex-col p-8 ">
          <div className="pb-3">
            <p className="text-center font-sans italic text-sm text-gray-500">
              By signing up, you are agreeing to our{" "}
              <a href="" className="text-blue-700">
                privacy policy
              </a>
              ,{" "}
              <a href="" className="text-blue-700">
                terms of use
              </a>
              <br />
              and{" "}
              <a href="" className="text-blue-700">
                code of conduct
              </a>
              .
            </p>
          </div>

          <div className="border-t border-gray-300 py-4">
            <p className="text-center font-sans text-sm text-gray-700">
              New to DEV Community?{" "}
              <a href="" className="text-blue-700">
                Create account.
              </a>
            </p>
          </div>
        </div>

        {/* END OF PAGE */}
      </div>
    </main>
  );
}
