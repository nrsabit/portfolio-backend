import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import errorHandler from "./app/middlewares/errorHandler";

const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

// app routes
app.use("/api", router);

app.get("/", async (req: Request, res: Response) => {
  res.send("Portfolio Server is Running");
});

// error handler.
app.use(errorHandler);

export default app;
