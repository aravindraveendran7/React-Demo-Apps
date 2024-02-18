import { useState } from "react";

export function InputBoxSubmission() {
  const [userName, setUsername] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="enter something"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button onClick={() => alert(`you typed ${userName}`)}>Submit</button>
    </>
  );
}
