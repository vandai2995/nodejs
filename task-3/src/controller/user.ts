//add user controller
import { Request, Response } from "express";
import { UserService } from "../service/user";

export const addUser = async (req: Request, res: Response) => {
    try {
        console.log("here", req.body)
        const { first_name, last_name, age } = req.body;
        console.log(req.body);
        const result = await UserService.getInstance().addUser({ first_name, last_name, age });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getInstance().getUsers();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await UserService.getInstance().getUserById(+id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, age } = req.body;
        const result = await UserService.getInstance().updateUser(+id, { first_name, last_name, age });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await UserService.getInstance().deleteUser(+id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}