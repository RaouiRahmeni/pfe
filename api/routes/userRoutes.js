const express=require("express")
const user=require("../controllers/user")

const router = express.Router();

router.post("/register", user.createUser);
router.post("/login", user.loginUser);




module.exports =router;