import { useForm } from "react-hook-form";
import { FaApple, FaGithub, FaTwitter, FaSquare } from "react-icons/fa";
export default function LogIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="flex p-10 justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        {/* TITULO DEV  */}
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt=""
          className="h-12 w-auto"
        />
        <div className="flex-col p-6">
          <h1 className="text-center text-3xl font-sans font-bold">
            Join the DEV Community
          </h1>
          <p className="text-center font-sans text-sm text-gray-700">
            DEV Community is a community of 1,391,112 amazing developers
          </p>
        </div>

        {/* LOGIN CON  OTRAS CUENTAS */}
        <div className="flex flex-col gap-3 w-96 justify-center">
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-50">
            <span className="text-xl">
              <FaApple />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with Apple
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-50">
            <span className="text-xl">
              <FaSquare />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with Forem
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-50">
            <span className="text-xl">
              <FaGithub />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with GitHub
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-50">
            <span className="text-xl text-cyan-500">
              <FaTwitter />
            </span>
            <span className="font-medium text-sm w-80">
              Continue with Twitter
            </span>
          </button>
        </div>

        {/* DIVISION OR */}
        <div>
          <p className="text-center font-sans text-sm text-gray-700">OR</p>
        </div>

        {/* FORMULARIO CORREO */}
        <div className="flex flex-col gap-3 w-96 justify-center">
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
            <div>
              <div className="flex p-2 w-96 justify-center">
                <input type="checkbox" name="remberMe" id="" />
                <span className="font-sans text-sm text-gray-700 w-60">
                  Remember me
                </span>
                <span className="font-sans text-sm text-blue-700">
                  Forgot password?
                </span>
              </div>
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
        <div>
          <p className="text-center">
            By signing up, you are agreeing to our privacy policy, terms of use
            and code of conduct.
          </p>
          <div>
            <p className="text-center">New to DEV Community? Create account.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
