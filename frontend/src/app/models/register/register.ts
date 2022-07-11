export interface signupModel{
    name: string,
    email: string,
    password: string,
    re_password: string,
    is_vendor: boolean,
}

export class Userr{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public is_vendor: boolean,
    ){}
    
}
export interface User{
    id: number;
    name: string,
    email: string,
    password?: string,
    re_password?: string,
    is_vendor?: boolean,
}