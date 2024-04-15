import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main>
      <div>
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit()}>
          <h2>Profile image</h2>
          <input type="url" name="profile-image" id="" />
          <h2>Name*</h2>
          <input type="text" />
          <h2>Username*</h2>
          <input type="text" />
          <h2>Email*</h2>
          <input type="email" name="" id="" />
          <h2>Password*</h2>
          <input type="password" name="" id="" />
          <h2>Password Confirmation*</h2>
          <input type="password" name="" id="" />
        </form>
        <button type="submit">Sign up</button>
      </div>
    </main>
  );
}
