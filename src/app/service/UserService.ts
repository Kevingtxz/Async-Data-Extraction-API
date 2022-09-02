import e from "express";
import { Repository } from "typeorm";
import AppData from "../data/app-data";
import UserModel from "../model/UserModel";

export default class UserService {
  repo: Repository<UserModel>;
  constructor() {
    this.repo = AppData.getRepository(UserModel);
  }

  async getAll(): Promise<UserModel[]> {
    return this.repo.find();
  }

  async get(id: number): Promise<UserModel> {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  async save(model: UserModel): Promise<UserModel> {
    return this.repo.save(model);
  }

  async saveAll(modelList: UserModel[]): Promise<UserModel[]> {
    return this.repo.save(modelList);
  }
}
