import mongoose from "mongoose";

const MONGOURI = process.env.MONGO_URI

export default function connectToMongoDB(): void {
    if (MONGOURI) {
        mongoose.connect(
            MONGOURI,
            () => console.log("Connected to MongoDB")
        )
    } else {
        console.log("Failed to connect to MongoDB");
    }
}