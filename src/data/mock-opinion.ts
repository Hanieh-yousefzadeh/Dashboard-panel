export type MyOpinion = {
    id: number
    name: string
    type: "opinion" | "question"
    message: string
    date: string
    status: "pending" | "answered"
    adminReply: string
}

export const mockMyOpinions: MyOpinion[] = [
    {
        id: 1,
        name: "sunScreen",
        type: "opinion",
        message: "The product quality was good.",
        date: "2026-10-22",
        status: "answered",
        adminReply: "Thank you for your comment",
    },{
        id: 2,
        name: "English Language Tutorial",
        type: "question",
        message:"Does this book have a printed version?",
        date: "2026-10-22",
        status: "pending",
        adminReply: "",
    }
]