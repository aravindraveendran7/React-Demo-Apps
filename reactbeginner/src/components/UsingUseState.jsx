import { useState } from "react";

export function UsingUseState() {
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

// export function UsingUseState() {
//   const [name, setName] = useState("test");
//   return (
//     <>
//       <h1>{name}</h1>
//       <ChangeNameButton setName={setName} />
//     </>
//   );
// }

//normal function
// function ChangeNameButton({ setName }) {
//   return <button onClick={() => setName(1)}>change me</button>;
// }

//Arrow function
// const ChangeNameButton = ({ setName }) => {
//   return <button onClick={() => setName("devika")}>change me</button>;
// };
