
export type OrderStatus =
    | "pending"
    | "delivered"
    | "cancelled"
    | "returned"

export type Order = {
    id: number
    customer: string
    email: string
    date: string
    total: number
    status: OrderStatus
}

export const mockOrders: Order[] = [
    {
        id: 1790701450189,
        customer: "Nora latifi",
        email: "nora@example.com",
        date: "2026-10-20",
        total: 2500000,
        status: "pending",
    },
    {
        id: 1791701450189,
        customer: "Borhan ahmadi",
        email: "borhan@example.com",
        date: "2026-10-19",
        total: 1800000,
        status: "delivered",
    },
    {
        id: 1793701450189,
        customer: "Hamed akbari",
        email: "hamed@example.com",
        date: "2026-10-18",
        total: 3200000,
        status: "cancelled",
    },
    {
        id: 1794701450189,
        customer: "Hiva Hosseini",
        email: "Hiva@example.com",
        date: "2026-10-17",
        total: 950000,
        status: "returned",
    },
    {
        id: 1795701450189,
        customer: "Shahab moradi",
        email: "shahab@example.com",
        date: "2026-10-21",
        total: 4100000,
        status: "pending",
    },
    {
        id: 1796701450189,
        customer: "sahar fazeli",
        email: "sahar@example.com",
        date: "2026-10-22",
        total: 1500000,
        status: "delivered",
    },
]