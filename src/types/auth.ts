export type Role = "Admin" | "Vendor" | "User"

export type MockUser = {
    id: number
    name: string
    email: string
    password: string
    role: Role
}
export type AuthUser = {
    id: number
    name: string
    email: string
    role: Role
}