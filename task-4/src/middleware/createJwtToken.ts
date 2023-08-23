import jwt from 'jsonwebtoken';



export interface JwtPayload {
    id: string;
    name: string;
    role: string;
}

export const createJwtToken = (payload: JwtPayload): string => {
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token;
}