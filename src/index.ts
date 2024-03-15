import { Request, Response } from "express";

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => { 
    response.status(200).send("Hello World");
  }); 

  app.listen(PORT, () => { 
    console.log("Server running at PORT: ", PORT); 
  }).on("error", (error: any) => {
    // gracefully handle error
    throw new Error(error.message);
  })
