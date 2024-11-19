const { log } = require("console");
const express = require("express")
const mongoose = require("mongoose");
const app = express()




app.get("/", async (req, res) => {
  try { 
    const todos = await todos.find({});
    res.status(200).json(todo);
  } catch (err){
    res.status(500).json({message:err.message})
  }
})

app.post("/", (req, res) => {
  res.send("hello world");
});

app.delete("/", (req, res) => {
  res.send("hello world");
});






mongoose.connect(
    "mongodb+srv://admin:admin@bugsapi.hwxkn37.mongodb.net/?retryWrites=true&w=majority&appName=bugsApi"
).then(() => {
    console.log("DB connected");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
}).catch(err=> console.log(err))



