import { Request, Response, NextFunction } from "express";

export const checkRole = (role: [string]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).send('Unauthorized');
        }
        if (!req.isAuthenticated()) {
            return res.status(401).send('Unauthorized');
        }
        if (role.includes(req.user.role)) {
            console.log(`Authorized ${req.user.role}`);
            return next();
        }
        res.status(401).send('Unauthorized');
    }
};