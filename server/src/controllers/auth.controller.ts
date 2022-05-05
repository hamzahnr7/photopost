import expressAsyncHandler from 'express-async-handler';
import {
  LoginUserDTO,
  LoginUserResponse,
  RegisterUserDTO,
  RegisterUserResponse,
} from '../dtos/auth.dto';
import authService, { AuthService } from '../services/auth.service';

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  register = expressAsyncHandler<any, RegisterUserResponse, RegisterUserDTO>(async (req, res) => {
    const user = await this.authService.register(req.body);
    res.status(201).json(user);
  });

  login = expressAsyncHandler<any, LoginUserResponse, LoginUserDTO>(async (req, res) => {
    const token = await this.authService.login(req.body);
    res.json({ token });
  });
}

export default new AuthController(authService);
