// Start Server info
const express = require("express");
const app = express();
const cors = require("cors");
const port = "5000";
app.use(express.json());
app.use(cors());
// end Server info
// Call DataBase
const db = require("./db");
// Call Model
const Todo = require("./model/Todo");
// Get All Data
app.get("/all", (req, res) => {
  Todo.find({}, (err, data) => {
    err ? res.status(404).json(err) : res.status(201).json(data);
  });
});
app.get("/finshedTasks", (req, res) => {
  const Filter = { isCompleted: true };
  Todo.find(Filter, (err, data) => {
    err ? res.status(404).json(err) : res.status(201).json(data);
  });
});
app.get("/NotFinshed", (req, res) => {
  const filter = { isCompleted: false };
  Todo.find(filter, (err, data) =>
    err ? res.status(404).json(err) : res.status(201).json(data)
  );
});
// Create new Column
app.post("/add", (req, res) => {
  Todo.create(req.body, (err, data) => {
    err ? res.status(400).json(err) : res.status(201).json(data);
  });
});
// delete row
app.delete("/delete", (req, res) => {
  Todo.deleteOne(req.body, (err, deletecont) => {
    err ? res.status(400).json(err) : res.status(201).json(deletecont);
  });
});
// delete on by id
app.delete("/delete/:id", (req, res) => {
  console.log(req.params.id);
  Todo.findByIdAndRemove(req.params.id, (err, deleteObj) => {
    err
      ? res.status(404).json(err)
      : deleteObj
      ? res.status(202).json(deleteObj)
      : res.status(202).json("flid to find filed");
  });
});
// delete All
app.delete("/deleteAll", (req, res) => {
  Todo.deleteMany({}, (err, deleteObj) => {
    err ? res.status(404).json(err) : res.status(201).json(deleteObj.data);
  });
});
// delete Finshed
app.delete("/deletefinshed", (req, res) => {
  const filter = { isCompleted: true };
  Todo.deleteMany(filter, (err, deleteObj) => {
    err ? res.status(404).json(err) : res.status(201).json(deleteObj.data);
  });
});
// update row by title
app.put("/update", (req, res) => {
  // console.log(req.params.title)\
  const filter = { title: "ali" };
  const query = { $set: { title: "m", isCompleted: false } };
  Todo.findOneAndUpdate(filter, query, { new: true }, (err, doc) => {
    if (err) {
      res.status(500).json("error");
    } else {
      console.log(doc);
      res.status(201).json(doc);
    }
  });
});
// update row by id
app.put("/updateById/:id", (req, res) => {
  const id = req.params.id;
  const query = { $set: { isCompleted: req.body.isCompleted } };
  Todo.findByIdAndUpdate(id, query, { new: true }, (err, doc) => {
    err ? res.status(400).json(err) : res.status(201).json(doc);
  });
});
// require Users from DataBase.
const User = require("./model/Users");
// get All Users
app.get("/allUsers", (req, res) => {
  User.find({}, (err, UserObj) =>
    err ? res.status(404).json(err) : res.status(201).json(UserObj)
  );
});
app.post("/NewUser", (req, res) => {
  const NewUser = req.body;
  User.create(NewUser, (err, NewUserObj) => {
    err ? res.status(404).json(err) : res.status(201).json(NewUserObj);
  });
});
// check user
app.post("/checkUserData", (req, res) => {
  const { email, userName, password } = req.body;
  const Filter = { email: email, userName: userName, password: password };
  User.find(Filter, (err, UserDataObj) => {
    if (err) {
      res.status(404).json(err);
    } else {
      if (UserDataObj[0]._id) {
        res.status(201).json("true");
      } else {
        res.status(201).json("flase");
      }
    }
  });
});
console.log(User);
// Listen to Port 3000
app.listen(port);
