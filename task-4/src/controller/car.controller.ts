import { Request, Response } from 'express';
import { CarsModel } from '../model/car';
import { CarService } from '../service/car.service';
export const addCar = async (req: Request, res: Response) => {
    try {
        console.log('addCar');
        const result = await CarService.getInstance().addCar();
        res.send(result);
    } catch (error: any) {
        console.log(error);
        res.status(error.status ? error.status : 500).send({ message: error.message });
    }
}


export const getCars = async (req: Request, res: Response) => {
    try {
        const result = await CarService.getInstance().getCars();
        res.send(result);
    } catch (error: any) {
        console.log(error);
        res.status(error.status ? error.status : 500).send({ message: error.message });
    }
}