import { useRouter } from "next/router";
import { useState } from "react";

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
    <main>
      <h1>Here we place the page with the signing in options</h1>
    </main>
  );
}
