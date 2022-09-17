import { Schema, model, connect } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  avatar?: string;
}


export default IUser;