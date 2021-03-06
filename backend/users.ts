export class User {
    constructor(public email: string, public name: string, private password: string){

    }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users = {
    "teste@teste.com": new User('teste@teste.com', 'Teste', 'teste')
}