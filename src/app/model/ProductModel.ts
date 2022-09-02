import { Column, Entity } from "typeorm";
import AbsModel from "./absModel";

@Entity("PRODUCTS")
export default class ProductModel extends AbsModel {
  @Column({ name: "TITLE", type: "varchar", length: 255, nullable: true })
  title: string;
  @Column({ name: "NUMBER", type: "int", nullable: true })
  price: number;
  @Column({ name: "DESCRIPTION", type: "text", nullable: true })
  description: string;
  @Column({ name: "CATEGORY", type: "varchar", length: 255, nullable: true })
  category: string;
  @Column({ name: "IMAGE_URL", type: "varchar", length: 255, nullable: true })
  imageUrl: string;
  rating: Rating;
}

export class Rating {
  @Column({ name: "RATE", type: "double", nullable: true })
  rate: string;
  @Column({ name: "COUNT", type: "int", nullable: true })
  count: number;
}
