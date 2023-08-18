import { Request, Response } from 'express';
import { CarsModel } from '../model/car';
import { CarService } from '../service/car.service';
import { UserService } from '../service/user.service';
export const addUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getInstance().addUser();
        res.send(result);
    } catch (error: any) {
        console.log(error);
        res.status(error.status ? error.status : 500).send({ message: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        if (req.isAuthenticated()) {
            if (user)
                res.send(`Hello ${JSON.stringify(user)}}`);
        } else {
            res.send('Login failed');
        }

    } catch (error) {
        console.log(error);
    }



}