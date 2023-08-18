require('dotenv').config();
import express from 'express';
import { addCar, getCars } from './controller/car.controller';
import { addUser, login } from './controller/user.controller';
import session from 'express-session';
import passport from 'passport';
import * as passportLocal from 'passport-local';
import './orm/mongodb';
import { authUser, isAuthenticated } from './middleware/auth';

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ //add req.session
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(passport.initialize()); //add authenticate method to req
app.use(passport.session()); // add req.session.passport


passport.use(
    new passportLocal.Strategy(authUser)
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

app.post('/login',
    passport.authenticate('local', { session: true }),
    login
);

app.post('/car', addCar)
app.post('/user', addUser)

app.get('/user', isAuthenticated, (req, res) => {
    res.send('Hello World! Authenticated');
});
app.get('/car', getCars);

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
