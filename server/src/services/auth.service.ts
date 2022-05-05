import createHttpError from 'http-errors';
import { LoginUserDTO, RegisterUserDTO, RegisterUserResponse } from '../dtos/auth.dto';
import { db } from '../models';

export class AuthService {
  constructor(private readonly database: typeof db) {}

  private loginError() {
    throw createHttpError(400, 'Email or Password is invalid');
  }

  async findEmail(email: string) {
    const user = await this.database.User.findOne({ where: { email } });
    if (user) throw createHttpError(409, 'Email already exist');
  }

  async register(registerUserDTO: RegisterUserDTO): Promise<RegisterUserResponse> {
    const user = {
      id: 1,
      email: 'lorem.ipsum@example.com',
      name: 'Lorem Ipsum',
      password: 'hesoyam',
      birthdate: null,
    };
    return user;
  }

  async login(loginDTO: LoginUserDTO) {
    const token = Math.random().toString().slice(2);
    return token;
  }
}

export default new AuthService(db);
