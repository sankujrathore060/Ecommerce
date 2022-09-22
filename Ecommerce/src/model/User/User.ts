export interface ILoginUser {
    username: string,
    password: string
}

export interface IRegisterUser {
    username: string,
    password: string
    email: string,
    isAdmin: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    accessToken: string
}