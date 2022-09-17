import { Router } from 'express';
import { get_user } from '../controller/user'

const routes = Router();

routes.get("/", get_user);

export default routes

const handleError = (err: string) => {
  console.log(err)
}
