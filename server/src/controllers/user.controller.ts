import expressAsyncHandler from "express-async-handler";
import userService, { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService:UserService) {}

  getMe = expressAsyncHandler(async (req, res) => {
    const user = await this.userService.getUser(req.user?.id!);
    res.json(user);
  });

  getUser = expressAsyncHandler(async (req, res) => {
    const user = await this.userService.getUser(parseInt(req.params.userId));
    res.json(user);
  });
}

export default new UserController(userService);
