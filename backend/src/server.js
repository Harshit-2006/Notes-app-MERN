import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

const app = express();
dotenv.config();
connectDB();
app.use("/api/notes", notesRoutes);

app.listen(5001, ()=>{
    console.log("server started on port 5001")
})

