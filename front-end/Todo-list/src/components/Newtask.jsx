import React, { useState } from "react";

export default function Newtask({ addfunction }) {
  const input = document.getElementById("inp");
  const [Newtitle, setNewtitle] = useState();
  const body = { title: Newtitle, isCompleted: false };
  const resSet = "";
  const add = () => {
    addfunction(body);
    input.value = resSet;
    setNewtitle(resSet);
  };
  return (
    <div className="Add-Task">
      <input
        id="inp"
        onChange={(e) => {
          setNewtitle(e.target.value);
        }}
        type="text"
        placeholder="Enter your Task"
      />
      <button onClick={add}>Add</button>
    </div>
  );
}
