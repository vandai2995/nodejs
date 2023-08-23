require('dotenv').config();
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import * as passportLocal from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import './orm/mongodb';
import { authUser, jwtAuth } from './middleware/auth';
import RedisStore from "connect-redis"
import redisClient from './orm/redis';
import router from './routes';
const app = express();
const port = 3000;

const redisStore = new RedisStore({
    client: redisClient,
    disableTouch: true,
    prefix: "session:"
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ //add req.session
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
    },
    store: redisStore

}));

app.use(passport.initialize()); //add authenticate method to req
app.use(passport.session()); // add req.session.passport

passport.use(
    new passportLocal.Strategy(authUser)
);

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, jwtAuth)
);

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user as any);
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(router);


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
const initServer = async () => {
    try {
        // await connectMongoDB();
        console.log('Server started');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

initServer();
