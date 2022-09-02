import { Request, Response } from "express";
import UserService from "../service/UserService";

export default class UserController {
  async getAll(request: Request, response: Response) {
    const service = new UserService();
    const modelList = await service.getAll();
    return response.status(200).json(modelList);
  }

  async get(request: Request, response: Response) {
    const id = Number.parseInt(request.params.id);
    const service = new UserService();
    const model = await service.get(id);
    return response.status(200).json(model);
  }
}
