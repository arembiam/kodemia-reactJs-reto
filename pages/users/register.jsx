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
      });
    setError("An error has occurred").catch((error) => {
      console.log("I am error:", error);
    });
  }

  return (
    <main className="flex p-10 justify-center items-center">
      <div className="border border-gray-300 rounded-md w-96 p-5 flex-col">
        <h1 className=" text-md font-sans font-bold">Create your account</h1>
        <form action="/" onSubmit={handleSubmit} className="py-3 ">
          <h2 className="font-medium text-sm py-2 inline-flex">
            Profile image
          </h2>
          <span className="text-red-600 inline-flex">*</span>
          <input
            type="text"
            name="profile"
            required
            onChange={(event) => setProfile(event.target.value)}
            value={profile}
            className="border border-gray-300 rounded-md p-1 inline-flex  w-full hover:bg-gray-100 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          />
          <h2 className="font-medium text-sm py-2 inline-flex">Name</h2>{" "}
          <span className="text-red-600 inline-flex">*</span>
          <input
            type="text"
            name="name"
            required
            onChange={(event) => setName(event.target.value)}
            value={name}
            className="border border-gray-300 rounded-md p-1 inline-flex w-full hover:bg-gray-100 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          />
          <h2 className="font-medium text-sm py-2 inline-flex">Username</h2>
          <span className="text-red-600 inline-flex ">*</span>
          <input
            type="text"
            name="username"
            required
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            className="border border-gray-300 rounded-md p-1 inline-flex w-full hover:bg-gray-100 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          />
          <h2 className="font-medium text-sm py-2 inline-flex">Email</h2>
          <span className="text-red-600 inline-flex">*</span>
          <input
            type="email"
            name="email"
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className="border border-gray-300 rounded-md p-1 w-full inline-flex hover:bg-gray-100 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          />
          <h2 className="font-medium text-sm py-2 inline-flex">Password</h2>
          <span className="text-red-600 inline-flex">*</span>
          <input
            type="password"
            name="password"
            required
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            className="border border-gray-300 rounded-md p-1 inline-flex w-full hover:bg-gray-100 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
          />
        </form>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="flex px-4 py-2 justify-center bg-blue-700 rounded-md text-white font-sans font-semibold text-sm
                "
        >
          Sign up
        </button>
      </div>
    </main>
  );
}
