import { useState } from "react";
//keyPoints
//1.onChange attribute is used to capture the value the user enters which can be achieved thru e.target.value
//which in turn sets the value to value attribute here.

export function ResetKey() {
  const [data, setData] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="enter something"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></input>
      <button onClick={() => setData("")}>Reset</button>
    </>
  );
}
