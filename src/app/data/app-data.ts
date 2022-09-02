import "reflect-metadata";
import { DataSource } from "typeorm";
import dbConfig from "../../config/db-config";
import modelList from "../model";

export default new DataSource({
  type: "mysql",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: true,
  logging: true,
  entities: modelList,
  subscribers: ["src/app/data/subscriber"],
  migrations: ["src/app/data/migration"],
});
