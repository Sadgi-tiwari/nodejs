//dependencies
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

//Scripts
import addBooks from "./q4createbook.js";
import updateBook from "./q4updatebook.js";
import deleteBook from "./q4deletebook.js";
import readBook from "./q4readbook.js";
import authorBook from "./q1authoefiltering.js";
import yearBook from "./q1yearfiltering.js";

//running all dependencies
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// testing
let port = process.env.PORT || 8001
app.get("/", (req,res)=>{
    res.send("<h1>Hii</h1>");
});

//running scripts
app.post("/add",addBooks);
app.post("/update/:id",updateBook);
app.post("/delete/:id",deleteBook);
app.post("/read",readBook);
app.post("/author",authorBook);
app.post("/year",yearBook);
//connection
app.listen(port,()=>{
    console.log("Server Connected on the PORT");
})