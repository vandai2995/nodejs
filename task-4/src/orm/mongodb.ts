import { connect, ConnectOptions } from 'mongoose';
import { countConnect } from '../helper/check.connect';

class MongoDB {
    private static instance: MongoDB;
    constructor() {
        this.connect();
    }
    connect(options?: ConnectOptions) {

        console.log('Connecting to MongoDB...');
        connect(process.env.MONGODB_URI || '', {
            maxPoolSize: 50,
        })
            .then(() => {
                console.log('[INFO] MongoDB connected to ' + process.env.MONGODB_URI, countConnect());
            })
            .catch((error) => {
                console.log('[ERROR] MongoDB connection failed');
            });
    }

    static getInstance() {
        if (!MongoDB.instance) {
            MongoDB.instance = new MongoDB();
        }
        return MongoDB.instance;
    }
}

const mongoDB = MongoDB.getInstance();

export const connectMongoDB = async (options?: ConnectOptions): Promise<void> => {
    return new Promise((resolve, reject) => {
        console.log('Connecting to MongoDB...');
        connect(process.env.MONGODB_URI || '', {
            maxPoolSize: 50,
        })
            .then(() => {
                console.log('[INFO] MongoDB connected to ' + process.env.MONGODB_URI, countConnect());
                resolve();
            })
            .catch((error) => {
                console.log('[ERROR] MongoDB connection failed');
                reject(error);
            });
    });
}

export default mongoDB;