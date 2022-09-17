import { model, Schema } from "mongoose";
import IUser from "../schemas/user";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});

const User = model<IUser>('User', userSchema);

export { User }

