import { Router } from "express";
import ProductController from "./controller/ProductController";
import UserController from "./controller/UserController";
import { API_PRODUCT_URL, API_USERS_URL } from "../util/constants-util";

const router = Router();
const userController = new UserController();
const productController = new ProductController();

router.get(API_USERS_URL, userController.getAll);
router.get(`${API_USERS_URL}:id`, userController.get);
router.get(API_PRODUCT_URL, productController.getAll);
router.get(`${API_PRODUCT_URL}:id`, userController.get);

export { router };
