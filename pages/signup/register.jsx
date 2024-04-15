import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <div>
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Profile image</h2>
          <input
            type="url"
            name="profile-image"
            {...register("profileImage")}
          />
          <h2>Name</h2>
          <input type="text" name="name" required {...register("name")} />
          <h2>Username</h2>
          <input
            type="text"
            name="username"
            required
            {...register("username")}
          />
          <h2>Email</h2>
          <input type="email" name="email" required {...register("email")} />
          <h2>Password</h2>
          <input type="password" name="" required {...register("password")} />
          <h2>Password Confirmation</h2>
          <input
            type="password"
            name="password-confirm"
            required
            {..."password-confirm"}
          />
        </form>
        <button type="submit">Sign up</button>
      </div>
    </main>
  );
}
