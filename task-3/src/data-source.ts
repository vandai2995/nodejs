import "reflect-metadata"
import { DataSource } from "typeorm"
// import { config } from "../orm/config"
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB || "postgres",
    synchronize: false,
    logging: false,
    entities: [__dirname + '/entity/**/*{.ts,.js}'],
    migrations: [__dirname + '/orm/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
    migrationsTableName: "migrations",

})
