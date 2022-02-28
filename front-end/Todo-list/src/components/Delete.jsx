import React from "react";

function Delete({
  DeleteAllFunctions,
  DeleteFinshedFunction,
  getFinshedFunction,
  getAllFunction,
  NotFinshedFunction,
}) {
  const getAll = () => getAllFunction();
  const DeleteAll = () => DeleteAllFunctions();
  const getNotFinshed = () => NotFinshedFunction();
  const DeleteFinshed = () => DeleteFinshedFunction();
  const GetFinshed = () => getFinshedFunction();
  return (
    <div className="delete">
      <button onClick={getAll}>Get All</button>
      <button onClick={GetFinshed}>Get Finshed</button>
      <button onClick={getNotFinshed}>Get Not Finshed</button>
      <button onClick={DeleteAll}>Delete All</button>
      <button onClick={DeleteFinshed}>Delete Finshed</button>
    </div>
  );
}

export default Delete;
