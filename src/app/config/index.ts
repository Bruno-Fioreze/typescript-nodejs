import {Express} from "express";

import connectToMongoDB from "../databases";
import appMiddleware from "./middleware/"

export default function appConfig(app: Express): void {
    connectToMongoDB();
    appMiddleware(app)
}



