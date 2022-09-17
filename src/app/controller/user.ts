import { Request, Response } from 'express';
import { User } from "../models/user"

const post_user = async (req: Request, res: Response) => {
    const user = new User(
        {
            name: 'Bill',
            email: 'bill@initech.com',
            avatar: 'https://i.imgur.com/dM7Thhn.png'
        }
    )
    await user.save();
    res.json({"message": "sucesso"})
}

const list_user = async (req: Request, res: Response) => {
    const users = await User.find({}) 
    res.json(users)
}


export { post_user, list_user };