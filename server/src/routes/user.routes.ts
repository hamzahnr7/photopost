import { Router } from 'express';

const userRoutes = Router();

/* GET users listing. */
userRoutes.get('/', function (req, res, next) {
  res.json({ msg: 'success' });
});

export default userRoutes;
