import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Workout = sequelize.define("Workout", {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  daysAvailable: { type: DataTypes.INTEGER, allowNull: false },
  workoutPlan: { type: DataTypes.JSON, allowNull: false },
});

export default Workout;
