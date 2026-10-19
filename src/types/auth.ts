export type Role = "admin" | "vendor" | "user"

export type MockUser ={
    id: number
    name :string
    email :string
    password : string
    role : Role
}