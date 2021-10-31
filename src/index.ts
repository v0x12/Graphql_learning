import express, { Express } from "express";
import { app } from "./app";

async function startServer(app: Express) {
  app.listen(3000, () => {
    console.log("Express server is started! on port 3000");
  });
}

startServer(app);
