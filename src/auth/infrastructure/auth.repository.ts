import { EntityRepository, Repository } from "typeorm";
import { User } from "../domain/auth.entity";


@EntityRepository(User)
export class UserRepository extends Repository<User>{}