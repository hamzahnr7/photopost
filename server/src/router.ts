import { Router } from 'express';
import { authRoutes } from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', authRoutes);
router.use('/v1/users', userRoutes);

export default router;
