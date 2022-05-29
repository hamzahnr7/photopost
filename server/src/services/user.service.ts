import createHttpError from "http-errors";
import { db } from "../models";

export class UserService {
  constructor(private database: typeof db) {}

  async getUser(userId: number) {
    const user = await this.database.User.findByPk(userId);
    if (!user) {
      throw createHttpError(404, 'User not found');
    }
    return user;
  }
}

export default new UserService(db);
