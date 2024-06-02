import express from 'express';
import { registerUser, loginUser,listAllUsers, forgotPassword, resetPassword } from '../Controllers/userController.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/list-all-users", listAllUsers);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword", resetPassword);

export default router;
