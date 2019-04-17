export class User {
    constructor(
        public id?: number,
        public login?: string,
        public email?: string,
        public senha?: string,
        public confirmPassword?: string,
        public nome?: string,
        public cpf?: string
    ){}
}