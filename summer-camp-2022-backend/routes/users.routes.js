import express from 'express';
import UserController from '../controllers/user.controllers.js';
import authorization from '../middleware/authorization.js';
import isUserAdmin from '../middleware/isAdmin.js';

const userRouter = express.Router();

userRouter.get('/', authorization.auth, isUserAdmin.isAdmin, async (req, res) => {
  await UserController.findUsers(req, res);
});

userRouter.post('/login', async (req, res) => {
  console.log(req.headers);
  await UserController.login(req, res);
});

userRouter.post('/create', (req, res) => {
  UserController.create(req, res);
});

userRouter.get('/me', authorization.auth, async (req, res) => {
  await UserController.me(req, res);
});

export default userRouter;
