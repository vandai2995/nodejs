require('dotenv').config();
import { DataSourceOptions } from "typeorm";
export const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB || "postgres",
    synchronize: false,
    logging: false,
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/orm/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
    migrationsTableName: "migrations"
}