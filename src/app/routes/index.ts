import {Router} from 'express';

const routes = Router();
routes.get("/", (req, res) => res.send("ola mundo"));

export default routes

