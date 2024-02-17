import { useState } from "react";

export function UsingUseState() {
  const [name, setName] = useState("test");
  return (
    <>
      <h1>{name}</h1>
      <ChangeNameButton setName={setName} />
    </>
  );
}

//normal function
// function ChangeNameButton({ setName }) {
//   return <button onClick={() => setName(1)}>change me</button>;
// }

//Arrow function
const ChangeNameButton = ({ setName }) => {
  return <button onClick={() => setName("devika")}>change me</button>;
};
