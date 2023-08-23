import { UsersDocument } from "../model/user";

declare global {
    namespace Express {
        interface User extends UsersDocument {}
    }
}