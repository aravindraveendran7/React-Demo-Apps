import { useState } from "react";
export function UpdatingArrayState() {
  const [friends, setFriends] = useState(["arvind", "devika", "asdf"]);
  return (
    <>
      <h1>My Friends list </h1>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={() => setFriends([...friends, "Aradhya"])}>
        Add Friend
      </button>
      <button
        onClick={() => setFriends(friends.filter((fil) => fil !== "Aradhya"))}
      >
        Delete Friend
      </button>
      <button
        onClick={() =>
          setFriends(friends.map((fil) => (fil === "asdf" ? "Aradhya" : fil)))
        }
      >
        Update Friend
      </button>
    </>
  );
}
