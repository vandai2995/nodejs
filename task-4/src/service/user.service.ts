import { CarsModel } from "../model/car";
import { UsersModel } from "../model/user";

export class UserService {
    private static instance: UserService;
    constructor() {
    }
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    async addUser() {
        const result = await UsersModel.create(
            {
                name: 'John',
                email: 'vadnai@gmial.com',
                role: 'admin',
                password: '123456'
            }
        );
        return result;

    }
}