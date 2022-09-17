import mongoose, { Schema, model, connect } from 'mongoose';
import {Router} from 'express';

const routes = Router();

// 1. Create an interface representing a document in MongoDB.
interface IUser2 {
    name: string;
    email: string;
    avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser2>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});

routes.get("/", 
    (req, res) => {

        const noteSchema = new mongoose.Schema({
            content: String,
            date: Date,
            important: Boolean,
          })
          
          const Note = mongoose.model('Note', noteSchema)
          
          const note = new Note({
            content: 'HTML is Easy',
            date: new Date(),
            important: true,
          })
          
          note.save().then(result => {
            console.log('note saved!')
            mongoose.connection.close()
          })

    });

export default routes

