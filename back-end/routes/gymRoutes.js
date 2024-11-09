import e from "express";

const router = e.Router();

router.get("/", (req, res) => {
  res.render("home.jsx");
});

export default router;
