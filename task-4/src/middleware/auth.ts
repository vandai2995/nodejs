import { Request, Response, NextFunction } from "express";

export const authUser = (user: string, password: string, done: any) => {
    console.log('authUser');
    console.log(`Value of "User" in authUser function ----> ${user}`)         //passport will populate, user = req.body.username
    console.log(`Value of "Password" in authUser function ----> ${password}`) //passport will popuplate, password = req.body.password
    const authenticatedUser = {
        name: 'John',
        id: 1,
    }
    return done(null, authenticatedUser);
}

export const serializeUser = (user: any, done: any) => {
    done(null, user);//attached to req.session.passport.user
}

export const deserializeUser = (user: any, done: any) => {
    done(null, user); //attached to req.user
}


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send('Unauthorized');
}