import { CarsModel } from "../model/car";
import { UsersModel } from "../model/user";
import redisClient from "../orm/redis";
import axios from 'axios'

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

    async getUser() {
        const result = await UsersModel.find().lean();
        return result;
    }

    async getUserByEmail(email: string) {
        const result = (await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)).data;
        return result;
    }



    async getUserByEmailUsingCache(email: string) {
        const data = await redisClient.get(email);
        if (data) {
            return JSON.parse(data);
        }
        const user = (await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)).data;
        if (user) {
            redisClient.set(email, JSON.stringify(user));
            return user;
        }
        return null;
    }
}