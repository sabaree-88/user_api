import { Router } from "express";
import {
  getUsers,
  getUsersById,
  addUser,
  editUser,
  deleteUser,
} from "../controller/userController.js";
const router = Router();

router.get("/view-user", getUsers);
router.get("/view-user/:id", getUsersById);
router.post("/add-user", addUser);
router.put("/edit-user/:id", editUser);
router.delete("/remove-user/:id", deleteUser);

export default router;
