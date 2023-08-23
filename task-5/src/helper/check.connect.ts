import mongoose from "mongoose";


export const countConnect = () => {
    const numConnections = mongoose.connections.length;
    console.log(`[INFO] Number of connections: ${numConnections}`);
}