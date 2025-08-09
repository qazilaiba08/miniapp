import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import authRoutes from "./Routes/authRouter.js";
import postRoutes from "./Routes/postRouter.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API is running..."); 
});


app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT}`));

export default app;