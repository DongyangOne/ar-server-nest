import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_user'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx: number
}