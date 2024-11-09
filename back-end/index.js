import express from "express";
import dotenv from "dotenv";
import { connectDB, sequelize } from "./config/db.js";
import mainRoutes from "./routes/gymRoutes.js";

dotenv.config();
const app = express();

// Menghubungkan ke database
connectDB();

// Middleware untuk parsing JSON
app.use(express.json());

// Routing
app.use("/programs", mainRoutes);

// Mulai server dan sinkronisasi model
const PORT = process.env.PORT || 3000;
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("Error syncing database:", error));
