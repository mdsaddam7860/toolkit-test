import express from "express";
import { testFunction } from "./controllers/test.controller.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  await testFunction();
  res.send(`Servers running on PORT:${process.env.PORT}`);
});

// endpoints or url fro application can be added here
export { app };
