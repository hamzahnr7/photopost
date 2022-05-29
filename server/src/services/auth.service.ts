import createHttpError from 'http-errors';
import { LoginUserDTO, RegisterUserDTO, RegisterUserResponse } from '../dtos/auth.dto';
import { db } from '../models';
import { comparePassword } from '../utils/bcrypt.helper';
import { createToken } from '../utils/jwt.helper';

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
    await this.findEmail(registerUserDTO.email);
    const user = await this.database.User.create({...registerUserDTO});
    return user;
  }

  async login(loginDTO: LoginUserDTO) {
    const {email, password} = loginDTO;
    const authUser = await this.database.User.findOne({where:{email}, attributes: {include: ['password']}});
    if (!authUser) throw this.loginError();
    const passMatch = await comparePassword(password, authUser.password);
    if (!passMatch) throw this.loginError();

    const accesToken = createToken(authUser);
    return accesToken.toString();
  }
}

export default new AuthService(db);
