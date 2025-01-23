import express, {Request, Response, ErrorRequestHandler} from "express";
import path from "path";
import dotenv from "dotenv";
import apiRoutes from "./routes/api";
import cors from "cors";
import { mongoConnect } from "./database/mongo";
import passport from "passport";

dotenv.config();

mongoConnect();

const server = express(); 

server.use(cors());

server.use(express.static(path.join(__dirname, "../public"))); 

server.use(express.urlencoded({extended:true})); 

server.use(passport.initialize());

server.use(apiRoutes);

server.use((req:Request, res:Response) => {
  res.status(404)
  res.json({error: "Endpoint não encontrado."})
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  err.status? res.status(err.status): res.status(400);
  err.message? res.json({error: err.message}): res.json({error: "Ocorreu um erro"})
}

server.use(errorHandler);

server.listen(process.env.PORT )