import { Request, Response } from "express";
import ProductService from "../service/ProductService";

export default class ProductController {
  async getAll(request: Request, response: Response) {
    const service = new ProductService();
    const modelList = await service.getAll();
    return response.status(200).json(modelList);
  }

  async get(request: Request, response: Response) {
    const id = Number.parseInt(request.params.id);
    const service = new ProductService();
    const model = await service.get(id);
    return response.status(200).json(model);
  }
}
