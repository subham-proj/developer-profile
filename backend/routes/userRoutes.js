import express from "express";
import {
  addUser,
  getAllUsers,
  getUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();
router.route("/").post(addUser).get(getAllUsers);
router.route("/:id").get(getUserById).delete(deleteUserById);

export default router;
