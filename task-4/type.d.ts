import { UsersDocument } from "./src/model/user";

declare global {
    namespace Express {
        interface User extends UsersDocument { }
    }
}