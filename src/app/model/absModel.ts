import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

export default class AbsModel {
  @PrimaryColumn({ name: "ID", type: "bigint" })
  public id: number;
  @CreateDateColumn({ name: "CREATE_AT" })
  readonly created_at?: Date;
  @UpdateDateColumn({ name: "UPDATED_AT" })
  readonly updated_at: Date;
  @Column({ name: "IS_ACTIVE", type: "bool", default: true })
  active: boolean;
}
