import { useForm } from "react-hook-form";
export default function LogIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="flex py-8 px-96 justify-center items-center">
      <div className="flex flex-col">
        <div>
          <h1 className="text-center">Join the DEV Community</h1>
          <p className="text-center">
            DEV Community is a community of 1,391,112 amazing developers
          </p>
        </div>
        <button>Continue with with Apple</button>
        <button>Continue with with Forem</button>
        <button>Continue with with GitHub</button>
        <button>Continue with with Twitter</button>
        <div>
          <p>OR</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Email</p>
            <input type="text" required {...register("email")} />
            <p>Password</p>
            <input
              type="password"
              required
              maxLength={8}
              {...register("password")}
            />
            <div>
              <div>
                <input type="checkbox" name="remberMe" id="" />
                <span>Remember me</span>
                <span>Forgot password?</span>
              </div>
              S<button type="submit">Log in</button>
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
