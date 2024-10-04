// step1: create a folder
// ?step2: move into that folder
// step3: npm init -y
// step4: open folder using VScode
// step5: npm i express
// step6: create server.js
// step7: run uisng node file_name; eg-> node server.js
// npm i mongoose ->This is use for connect
// npm i npm i dotnode

const express = require("express");
const app = express();
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/todos");

dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at port no 3000");
});

app.get("/", (req, res) => {
  res.send("Hello jee, I am super Hero");
});
