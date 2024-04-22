const express = require("express");
const mongoose = require("mongoose");

const OpenAI = require("openai");

// const path = require("path");
const cors = require("cors");
const connectDB = require("./src/config/connectDb");
const PORT = process.env.PORT || 5000;
const app = express();

const authRoute = require("./src/routes/userRoute");

// User Middlewares
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send(
    "<h2 style='color:green;box-sizing:border-box; margin:0; background: #f3f3f9; height: 95vh;'>Server is Running!<h2>"
  );
});

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

app.post("/get-facts", async (req, res) => {
  const { name } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `
        This ${name} is a planet. It could be sun as well. Now give me some interesting facts about this planet (max 3-4).
        `,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  res.status(200).json(completion.choices[0]);
});

// --------------------
// ---------------
// ----------
// -----
// Routes
app.use("/user", authRoute);

// Listen Application
mongoose.connection.once("open", () => {
  console.log(`📗Connected to Server`);
  app.listen(PORT, () => console.log(`Server is running in port no : ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.log("📕", err);
});
