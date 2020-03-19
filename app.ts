import express, { Request, Response, response } from "express";

const app = express();
const port = 8000;
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello World");
});
