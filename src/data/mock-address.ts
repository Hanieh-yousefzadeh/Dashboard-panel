export type Address = {
    id: number
    province: string
    city: string
    address: string
    plaque: string
    postalCode: string
}

export const mockAddresses: Address[] = [
    {
        id: 1,
        province: "Tehran",
        city: "Tehran",
        address: "Valiasr Street",
        plaque: "20",
        postalCode: "1234567890",
    },{
        id: 2,
        province: "Isfahan",
        city: "Isfahan",
        address: "Chaharbagh Street",
        plaque: "15",
        postalCode: "1234567891",
    }
]