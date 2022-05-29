import { Router } from 'express';
import userController, { UserController } from '../controllers/user.controller';
import { authMw } from '../midlleware/auth.mw';
import { validationMw } from '../midlleware/validation.mw';

const userRoutes = Router();

/* GET users listing. */
userRoutes.get('/', function (req, res, next) {
  res.json({ msg: 'success' });
});
userRoutes.get('/me',authMw,userController.getMe);
userRoutes.get('/:userId',userController.getUser);

export default userRoutes;
