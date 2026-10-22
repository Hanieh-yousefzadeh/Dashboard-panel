import type {MockUser} from "@/types/auth"

export const mockUsers : MockUser []= [
    {
        id:1,
        name : "admin",
        email : "admin@example.com",
        password : "admin123",
        role : "Admin"
    },
    {
       id:2,
        name : "vendor",
        email : "vendor@example.com",
        password : "vendor123",
        role : "Vendor"  
    },
    {
        id:3,
        name : "user",
        email : "user@example.com",
        password : "user123",
        role : "User"   
    }
]