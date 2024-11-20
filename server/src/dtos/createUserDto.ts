export class CreateUserDto {
    constructor(
        public firstname: string,
        public lastname: string,
        public displayname: string,
        public address: string,
        public email: string,
        public password: string
    ) {}
}