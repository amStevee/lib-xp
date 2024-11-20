import { CreateUserDto } from "../dtos/createUserDto";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserUseCase } from "../use-cases/createUser.use-case";

const userRepository = new UserRepository();


export class UserService implements CreateUserUseCase {
    async create(createUserDto:CreateUserDto):Promise<User> {
        const {firstname, lastname, displayname, address, email, password} = createUserDto
        const user = await userRepository.create(firstname, lastname, displayname, address, email, password);

        return user
    }

    async findAll():Promise<User[]> {
        const users = userRepository.findAll();
        return users
    }

    async findOne(id:string) {
        const user = await userRepository.findOne(id)
        return user
    }

    async delete(id:string) {
        return userRepository.delete(id);
    }
}