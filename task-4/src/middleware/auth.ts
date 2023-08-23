import { Request, Response, NextFunction } from "express";

export const authUser = (user: string, password: string, done: any) => {
    const authenticatedUser = {
        name: 'John',
        role: 'member',
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
    console.log(req.user);
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send('Unauthorized');
}

export const jwtAuth = (jwt_payload: any, done: any) => {
    console.log(jwt_payload);
    if (jwt_payload) {
        return done(null, jwt_payload);
    }
    return done(null, false);

}