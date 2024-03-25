const express = require("express");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authControler");

const { requireSign, isAdmin } = require("../middlewares/authMiddleware");
//router object
const router = express.Router();

//routing

//REGISTER|| METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//test route
router.get("/test", requireSign, isAdmin, testController);
//protected route

router.get("/user-auth", requireSign, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
