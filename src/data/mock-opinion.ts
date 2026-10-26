export type MyOpinion = {
    id: number
    name: string
    image: string
    type: "opinion" | "question"
    message: string
    date: string
    status: "Pending" | "Answered"
    adminReply: string
}

export const mockMyOpinions: MyOpinion[] = [
    {
        id: 1,
        name: "Sunscreen",
        image: "/product/sunscreen.webp",
        type: "opinion",
        message: "The product quality was good.",
        date: "2026-10-22",
        status: "Answered",
        adminReply: "Thank you for your comment",
    }, {
        id: 2,
        name: "English Language Tutorial",
        image: "/product/book.webp",
        type: "question",
        message: "Does this book have a printed version?",
        date: "2026-10-22",
        status: "Pending",
        adminReply: "",
    }
]