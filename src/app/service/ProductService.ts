import { Repository } from "typeorm";
import AppData from "../data/app-data";
import ProductModel from "../model/ProductModel";

export default class ProductService {
  repo: Repository<ProductModel>;
  constructor() {
    this.repo = AppData.getRepository(ProductModel);
  }

  async getAll(): Promise<ProductModel[]> {
    return this.repo.find();
  }

  async get(id: number): Promise<ProductModel> {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  async save(model: ProductModel): Promise<ProductModel> {
    return this.repo.save(model);
  }

  async saveAll(list: ProductModel[]): Promise<ProductModel[]> {
    return this.repo.save(list);
  }
}
