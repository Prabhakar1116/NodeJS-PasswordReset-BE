import mongoose from "mongoose";
import dotnev from "dotenv";


dotnev.config();

const mongodb_url = process.env.MONGODB_URL

const connectDB = async()=>{
    try {
        if (!mongodb_url) {
            throw new Error("MongoDB URL not set in environment variables");
        }
        await mongoose.connect(mongodb_url, {
            
        });
        console.log("MongoDB Connected...");
    }
            catch(error){
                console.log(error.message);
                res.status(500).json({message:"MongoDB connection Error"})
            }
}

export default connectDB