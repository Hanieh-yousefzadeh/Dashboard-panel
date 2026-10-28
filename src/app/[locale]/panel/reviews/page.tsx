
"use client"

import { useState, useEffect } from "react"
import { mockMyOpinions, type MyOpinion } from "@/data/mock-opinion"
import { PencilSparkles, Trash } from "lucide-react"
import Image from "next/image"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function MyOpinionsPage() {
    const [opinions, setOpinions] = useState<MyOpinion[]>(mockMyOpinions)
    const [loaded, setLoaded] = useState(false)
    const [editingOpinion, setEditingOpinion] = useState<MyOpinion | null>(null)
    useEffect(() => {
        const savedOpinions = localStorage.getItem("myOpinions")
        if (savedOpinions) {
            setOpinions(JSON.parse(savedOpinions))
        }
        setLoaded(true)
    }, [])
    useEffect(() => {
        if (loaded) {
            localStorage.setItem("myOpinions", JSON.stringify(opinions))
        }
    }, [opinions, loaded])

    function handleEditClick(opinion: MyOpinion) {
        setEditingOpinion(opinion)
    }

    function handleEditSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!editingOpinion || !editingOpinion.message.trim()) return
        const updatedOpinions = opinions.map((item) => item.id === editingOpinion.id ? { ...item, message: editingOpinion.message.trim() } : item)
        setOpinions(updatedOpinions)
        setEditingOpinion(null)
    }

    function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const changeMessage = editingOpinion ? { ...editingOpinion, message: e.target.value } : null
        setEditingOpinion(changeMessage)
    }

    function handleDeleteOpinion(id: number) {
        const updatedOpinions = opinions.filter((item) => item.id !== id)
        setOpinions(updatedOpinions)
    }

    return (
        <div className="px-9 pt-6">
            <h1 className="text-2xl font-bold pb-5">My Opinions & Questions</h1>
            <Dialog open={editingOpinion !== null}
                onOpenChange={(isOpen) => {
                    if (!isOpen) setEditingOpinion(null)
                }}
            >
                <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-[#5409cd]"> Edit Opinion or Question </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleEditSubmit} className="flex flex-col gap-5 pt-5">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="edit-message"> Your Message </Label>

                            <Textarea id="edit-message"
                                value={editingOpinion?.message}
                                onChange={handleMessageChange}
                                placeholder="Enter your message"
                                required
                                className="min-h-28 border-[#7a3ffa1a] text-[#4104a2] focus-visible:ring-0"
                            />
                        </div>
                        <Button type="submit" className="mt-3 w-full bg-[#7a3ffacb] py-5 hover:bg-[#5409cd]">
                            Save Changes
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            <div className="w-300 rounded-md border border-[#7a3ffa1a] mt-4  shadow-sm">
                <Table >
                    <TableHeader className="h-15 bg-[#f1ebfe6a]">
                        <TableRow>
                            <TableHead className="text-base font-bold text-[#5409cd] pl-9">Product</TableHead>
                            <TableHead className="text-base font-bold text-[#5409cd]">Type</TableHead>
                            <TableHead className="text-base font-bold text-[#5409cd] pl-10">Message</TableHead>
                            <TableHead className="text-base font-bold text-[#5409cd]">Status</TableHead>
                            <TableHead className="text-base font-bold text-[#5409cd] pl-10">Admin Reply</TableHead>
                            <TableHead className="text-base font-bold text-[#5409cd] pr-6">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {opinions.map((opinion) => (
                            <TableRow key={opinion.id}>
                                <TableCell>
                                    <div className="flex min-w-40 items-center gap-1 pl-5">
                                        <Image src={opinion.image} alt={opinion.name} width={48} height={48}
                                            className="size-12 shrink-0 rounded-md object-cover"
                                        />
                                        <span className="line-clamp-1"> {opinion.name}</span>
                                    </div>
                                </TableCell>


                                <TableCell>
                                    {opinion.type === "opinion" ? "Opinion" : "Question"}
                                </TableCell>

                                <TableCell><div className="line-clamp-1 pl-10">{opinion.message}</div></TableCell>

                                <TableCell><div className={`rounded-full text-center py-2 px-1.5 text-xs ${opinion.status === "Answered" ? "bg-green-100 text-green-700" : "bg-[#ede8fd] text-[#031381]"}`}>
                                    {opinion.status === "Answered" ? "Answered" : "Pending"}
                                </div>
                                </TableCell>

                                <TableCell>
                                    <div className="line-clamp-1 pl-10">
                                        {opinion.adminReply || ""}
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center justify-center pr-7">
                                        <button onClick={() => handleEditClick(opinion)}
                                            className="text-[#6e2dfab3] cursor-pointer" >
                                            <PencilSparkles className="size-5" />
                                        </button>

                                        <button onClick={() => handleDeleteOpinion(opinion.id)}
                                            className="ml-3 text-red-600 cursor-pointer">
                                            <Trash className="size-5" />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
