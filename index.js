import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./Database/config.js";
import userRoutes from './Routers/userRoute.js';

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));

// db connection
connectDB();

const port = process.env.PORT || 4000;

// routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/user", userRoutes);

// listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
