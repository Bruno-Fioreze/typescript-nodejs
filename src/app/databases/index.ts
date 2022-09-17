import mongoose from "mongoose";

const MONGOURI = process.env.MONGO_URI

export default function connectToMongoDB(): void {
    if (MONGOURI) {
        mongoose.connect(
            MONGOURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            },
            () => console.log("Connected to MongoDB")
        )
    } else {
        console.log("Failed to connect to MongoDB");
    }
}