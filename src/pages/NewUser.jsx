import {
  FaApple,
  FaGithub,
  FaTwitter,
  FaSquare,
  FaEnvelope,
} from "react-icons/fa";
export default function NewUser() {
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

        {/* SIGN UP OPCIONES */}
        <div className="flex flex-col gap-3 w-96 justify-center">
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaApple />
            </span>
            <span className="font-medium text-sm w-80">Sign up with Apple</span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaSquare />
            </span>
            <span className="font-medium text-sm w-80">Sign up with Forem</span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaGithub />
            </span>
            <span className="font-medium text-sm w-80">
              Sign up with GitHub
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl text-cyan-500">
              <FaTwitter />
            </span>
            <span className="font-medium text-sm w-80">
              Sign up with Twitter
            </span>
          </button>
          <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
            <span className="text-xl">
              <FaEnvelope />
            </span>
            <span className="font-medium text-sm w-80">Sign up with Email</span>
          </button>
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
              Already have an account?{" "}
              <a href="" className="text-blue-700">
                Log in.
              </a>
            </p>
          </div>
        </div>

        {/* END OF PAGE */}
      </div>
    </main>
  );
}
