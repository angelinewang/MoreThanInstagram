import * as productCtrl from "../../controllers/products.js";
import { Router } from "express";
import {checkAuth} from "../../middleware/auth.js";

const router = Router();

/*---------- Public Routes ----------*/
router
    .route("/")
    .get(productCtrl.getAllProducts)
/*---------- Protected Routes ----------*/
    .post(checkAuth, productCtrl.createProduct);

/*---------- Public Routes ----------*/
router 
    .route("/:id")
    .get(productCtrl.productDetail)
/*---------- Protected Routes ----------*/
    .patch(checkAuth, productCtrl.updateProduct)
    .delete(checkAuth, productCtrl.deleteProduct);

export default router;
