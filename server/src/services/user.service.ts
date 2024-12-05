import { CreateUserDto } from "../interfaces/user";
import { UserRepository } from "../repositories/user.repository";
import { Patron } from "@prisma/client";

const userRepository = new UserRepository();


export class UserService {
    async create(createUserDto:CreateUserDto):Promise<Patron> {
        const {firstname, lastname, displayname, address, email, password} = createUserDto
        const user = await userRepository.create(firstname, lastname, displayname, address, email, password);

        return user
    }

    async findAll():Promise<Patron[]> {
        const users = await userRepository.findAll();
        return users
    }

    async findOne(id:string) {
        const user = await userRepository.findOne(id)
        return user
    }

    async delete(id:string) {
        return await userRepository.delete(id);
    }
}