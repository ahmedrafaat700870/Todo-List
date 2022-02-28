import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import "./style/main.css";

import Todo from "./components/Todo";
import Newtask from "./components/Newtask";
import Delete from "./components/Delete";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    GetTasks();
  }, []);
  const GetTasks = () => {
    axios
      .get(`http://localhost:5000/all`)
      .then((response) => {
        if (response.data == "") {
          console.log("done");
        } else {
          setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFinshedTasks = () => {
    axios("http://localhost:5000/finshedTasks")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  const getNotFinshed = () => {
    axios
      .get("http://localhost:5000/NotFinshed")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  const deleteOneById = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((response) => {
        GetTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createNewTodo = (body) => {
    axios
      .post("http://localhost:5000/add", body)
      .then((response) => {
        GetTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const UpdateOne = (id, body) => {
    axios
      .put(`http://localhost:5000/updateById/${id}`, body)
      .then((response) => {
        GetTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteAll = () => {
    axios
      .delete("http://localhost:5000/deleteAll")
      .then((data) => {
        GetTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteFinshed = () => {
    axios
      .delete("http://localhost:5000/deletefinshed")
      .then((data) => {
        GetTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const todo = Data.map((ele, i) => {
    return (
      <Todo
        updateFunction={UpdateOne}
        deleteFunction={deleteOneById}
        task={ele}
        key={i}
      />
    );
  });
  return (
    <div className="App">
      <Link to="Register">Regester</Link> | 
      <Link to="logIn">logIn</Link> | 
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/logIn" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="Home">
              <Newtask addfunction={createNewTodo} />
              <Delete
                DeleteAllFunctions={DeleteAll}
                DeleteFinshedFunction={DeleteFinshed}
                getFinshedFunction={getFinshedTasks}
                getAllFunction={GetTasks}
                NotFinshedFunction={getNotFinshed}
              />
              {todo}
            </div>
          }
        />
      </Routes>
    </div>
  );
}
