import { useState } from "react";

export default function Authenticate({ token }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const res = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await res.json();
      setSuccess(json.message);
      console.log(json);
    } catch (err) {
      setError(error.message);
      console.log(err);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <button onClick={handleClick}>
        <h2>Authenticate!</h2>
      </button>
    </div>
  );
}
