import { CarsModel } from "../model/car";

export class CarService {
    private static instance: CarService;
    constructor() {
    }
    static getInstance() {
        if (!CarService.instance) {
            CarService.instance = new CarService();
        }
        return CarService.instance;
    }
    async addCar() {
        const result = await CarsModel.create({ brand: 'BMW', color: 'red' });
        return result;

    }

    async getCars() {
        const result = await CarsModel.find().lean();
        return result;

    }
}