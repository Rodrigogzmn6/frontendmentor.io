//Import dependences
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  loginUser,
  registerUser,
  getUsers,
} from "./controllers/userController.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./controllers/taskController.js";
import { authenticateToken } from "./middleware.js";
const app = express();
const port = 3000;

//Configure middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Public routes (Without authorization token)
app.post("/login", loginUser);
app.post("/register", registerUser);
app.get("/usuarios", getUsers);

// Authentication middleware for protected routes
app.use(authenticateToken);

// Private routes (With authorization token)
app.get("/", getTasks);
app.post("/tasks", createTask);
app.put("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);

//Database connection and start server
mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to database: ${error}`);
  });
