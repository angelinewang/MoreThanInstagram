import express from "express";
import * as usersCtrl from "../../controllers/users.js";

const router = express.Router();
/*---------- Public Routes ----------*/
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

// router.get("/myproducts/:id", usersCtrl.getMyProducts);

/*---------- Protected Routes ----------*/

export default router;
