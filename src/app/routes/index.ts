import { Router } from 'express';
import { list_user, post_user } from '../controller/user'

const routes = Router();

routes.get("/users/", list_user);
routes.post("/users/", post_user);

export default routes
