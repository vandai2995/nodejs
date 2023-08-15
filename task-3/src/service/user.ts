import { AppDataSource } from "../data-source";
import { IUser } from "../dto/user";
import { User } from "../entity/User";



export class UserService {
    private static instance: UserService;
    private constructor() { }

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }

        return UserService.instance;
    }


    public async addUser(user: IUser) {
        const new_user = new User();
        new_user.first_name = user.first_name;
        new_user.last_name = user.last_name;
        new_user.age = user.age;
        await AppDataSource.manager.save(new_user);
        return new_user;
    }

    public async getUsers() {
        const users = await AppDataSource.manager.find(User);
        return users;
    }

    public async getUserById(id: number) {
        const user = await AppDataSource.manager.findOneBy(
            User, { id: id });
        return user;
    }

    public async updateUser(id: number, user: IUser) {
        const user_to_update = await AppDataSource.manager.findOneBy(
            User, { id: id });
        user_to_update.first_name = user.first_name;
        user_to_update.last_name = user.last_name;
        user_to_update.age = user.age;
        await AppDataSource.manager.save(user_to_update);
        return user_to_update;
    }

    public async deleteUser(id: number) {
        const user_to_delete = await AppDataSource.manager.findOneBy(
            User, { id: id });
        await AppDataSource.manager.delete(User, user_to_delete);
        return user_to_delete;
    }

}