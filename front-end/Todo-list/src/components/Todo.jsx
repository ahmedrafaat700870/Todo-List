import React, { useState } from "react";

import "../style/Todo.css";

export default function Todo({ task, deleteFunction, updateFunction }) {
  const { isCompleted, title, _id } = task;
  const deleteOne = () => deleteFunction(_id);
  const Update = () => updateFunction(_id, { isCompleted: !isCompleted });
  const range = 8;
  const malti = " ...";
  const showData = (text) =>
    text.length <= range ? text : text.slice(0, range) + malti;
  return (
    <div className="Todo">
      <input type="checkbox" onClick={Update} checked={isCompleted} />
      <p className={isCompleted ? "Checked" : "notChecked"}>
        {showData(title)}
      </p>
      <span onClick={deleteOne}>X</span>
    </div>
  );
}
