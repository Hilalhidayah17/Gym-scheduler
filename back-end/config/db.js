import { Sequelize } from "sequelize";
import env from "dotenv";

env.config();

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);
// test if the connection is ok
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected");
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error.message);
    process.exit(1);
  }
};

export { sequelize, connectDB };