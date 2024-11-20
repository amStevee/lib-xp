import { CreateUserDto } from "../dtos/createUserDto";
import { User } from "../entities/User";

export interface CreateUserUseCase {
    create(createUserDto:CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}