import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://localhost:3000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        profile: profile,
        name: name,
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.replace("/");
      })

      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }

  return (
    <main>
      <div>
        <h1>Create your account</h1>
        <form action="/" onSubmit={handleSubmit}>
          <h2>Profile image</h2>
          <input
            type="text"
            name="profile"
            required
            onChange={(event) => setProfile(event.target.value)}
            value={profile}
          />
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            required
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <h2>Username</h2>
          <input
            type="text"
            name="username"
            required
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            required
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </form>
        <button type="submit">Sign up</button>
      </div>
    </main>
  );
}
