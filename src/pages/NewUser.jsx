export default function NewUser() {
  return (
    <main className="flex py-8 px-96 justify-center items-center">
      <div className="flex flex-col">
        <div>
          <h1 className="text-center">Join the DEV Community</h1>
          <p className="text-center">
            DEV Community is a community of 1,391,112 amazing developers
          </p>
        </div>
        <button>Sign up with Apple</button>
        <button>Sign up with Forem</button>
        <button>Sign up with GitHub</button>
        <button>Sign up with Twitter</button>
        <button>Sign up with Email</button>
        <div>
          <p className="text-center">
            By signing up, you are agreeing to our privacy policy, terms of use
            and code of conduct.
          </p>
          <div>
            <p className="text-center">Already have an account? Log in.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
