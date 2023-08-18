import c from 'config';
import { createClient } from 'redis';

const redisURL = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;
const redisClient = createClient({
    url: redisURL
});

const connectRedis = async (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        await redisClient.connect().then(() => {
            console.log('Redis connected');
            resolve();
        }).catch((error) => {
            console.log('Redis connection failed');
            reject(error);
        });
    });
}

connectRedis();
redisClient.set('test', 1);

redisClient.on('error', (error) => {
    console.log(error);
});

export default redisClient;