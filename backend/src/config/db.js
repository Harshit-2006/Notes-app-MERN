import mongoose, { mongo } from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("Error connecting to mongo", error)
        process.exit(1) // exit with failure (0 means success)
    }
} 