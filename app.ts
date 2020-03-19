import express, { Request, Response } from "express";

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

app.listen(8000, () => {
  console.log(`server listen on port ${8000}`);
});

//minjunPark
