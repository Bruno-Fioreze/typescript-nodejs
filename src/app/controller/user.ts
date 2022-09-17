import { Request, Response } from 'express';
import { User } from "../models/user"

const get_user = async (req: Request, res: Response) => {
    const user = new User(
        {
            name: 'Bill',
            email: 'bill@initech.com',
            avatar: 'https://i.imgur.com/dM7Thhn.png'
        }
    )
    await user.save();
    console.log("chegou aqui")
    res.json({"message": "sucesso"})
}

export { get_user };