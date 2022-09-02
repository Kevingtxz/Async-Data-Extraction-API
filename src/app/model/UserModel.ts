import { Column, Entity } from "typeorm";
import AbsModel from "./absModel";

@Entity("USERS")
export default class UserModel extends AbsModel {
  @Column({ name: "EMAIL", type: "varchar", length: 255, nullable: true })
  email: string;
  @Column({ name: "USERNAME", type: "varchar", length: 255, nullable: true })
  username: string;
  @Column({ name: "PASSWORD", type: "varchar", length: 255, nullable: true })
  password: string;
  name: Name;
  address: Address;
  @Column({ name: "PHONE", type: "char", length: 14, nullable: true })
  phone: string;
}

export class Name {
  @Column({ name: "FIRST_NAME", type: "varchar", length: 255, nullable: true })
  firstname: string;
  @Column({ name: "LAST_NAME", type: "varchar", length: 255, nullable: true })
  lastname: string;
}

export class Address {
  @Column({ name: "CITY", type: "varchar", length: 255, nullable: true })
  city: string;
  @Column({ name: "STREET", type: "varchar", length: 255, nullable: true })
  street: string;
  @Column({ name: "NUMBER", type: "varchar", length: 255, nullable: true })
  number: number;
  @Column({ name: "ZIPCOD", type: "char", length: 10, nullable: true })
  zipcod: string;
  @Column({
    name: "GEOLOCATION_LAT",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  geolocationLat: string;
  @Column({
    name: "GEOLOCATION_LONG",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  geolocationLong: string;
}
