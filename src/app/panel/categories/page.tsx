"use client"

import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { addCategory, editCategory, deleteCategory } from "@/redux/categorySlice"
import type { Category } from "@/data/mock-categoris"
import { PencilSparkles, Trash } from "lucide-react"
import { useState, useEffect } from "react"
import { Plus } from "lucide-react"

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
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function categoryPage() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const dispatch = useDispatch<dispatchType>()

    const categories = useSelector((state: stateType) => state.categories.categories)

    const [category, setCategory] = useState("")
    const [open, setOpen] = useState(false)
    const [editingCategory, setEditingCategory] = useState<Category | null>(null)


    function handleAddCategory(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!category.trim()) return

        const newCategory: Category = {
            id: Date.now(),
            name: category
        }
        dispatch(addCategory(newCategory))
        setCategory("")
        setOpen(false)
    }

    function handleEditClick(category: Category) {
        setEditingCategory(category)
    }
    function handleEditSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!editingCategory || !editingCategory.name.trim()) return

        dispatch(editCategory({
            id: editingCategory.id,
            name: editingCategory.name,
        }))
        setEditingCategory(null)
    }

    function handleDeleteCategory(id: number) {
        dispatch(deleteCategory(id))
    }
    return (
        <div className="p-5 pl-8 xl:w-316  md:w-3xl w-80 overflow-x-atuo">
            <div className="flex justify-between pb-12">
                <div className="flex flex-col gap-3">
                    <p className="lg:text-2xl font-bold"> Categories Management</p>
                    <p className="text-sm text-[#7B29FB]"> Total Categories: ({categories.length}) </p>
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger render={<Button className="text-base bg-[#7a3ffacb] py-4.5 pr-3.5 hover:bg-[#5409cd] cursor-pointer"><Plus strokeWidth={3} />  Add Category</Button>} />

                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                        <DialogHeader>
                            <DialogTitle className="text-[#5409cd] font-bold">Add New Category</DialogTitle>
                        </DialogHeader>

                        <form
                            onSubmit={handleAddCategory}
                            className=" flex flex-col gap-5 pt-5 text-[#6200ff]"
                        >
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Category Name</Label>
                                <Input
                                    id="category-name"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder="Enter category name"
                                    required
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>
                            <Button type="submit" className=" cursor-pointer w-full py-5 mt-3 bg-[#7a3ffacb] hover:bg-[#5409cd]"> Add Category</Button>
                        </form>
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={editingCategory !== null}
                    onOpenChange={(isOpen) => {
                        if (!isOpen) setEditingCategory(null)
                    }}
                >
                    <DialogContent className="border-[#7a3ffa1a] text-[#5409cd]">
                        <DialogHeader>
                            <DialogTitle className="text-[#5409cd] font-bold">Edit Category</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleEditSubmit} className="flex flex-col gap-5 pt-5">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="editName">  Category Name</Label>
                                <Input
                                    id="edit-category-name"
                                    value={editingCategory?.name}
                                    onChange={(e) => setEditingCategory((prev) => prev ? { ...prev, name: e.target.value } : null
                                    )
                                    }
                                    required
                                    className="border-[#7a3ffa1a] text-[#4104a2] placeholder:text-[#6315e16e] focus-visible:ring-0"
                                />
                            </div>
                            <Button type="submit" className="w-full py-5 bg-[#7a3ffacb] hover:bg-[#5409cd]" > Save Changes  </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {mounted && (
                <div className="rounded-md border-2 border-[#7a3ffa1a]">
                    <Table className="">
                        <TableHeader className="h-12 text-base bg-[#f1ebfe6a]">
                            <TableRow>
                                <TableHead className="xl:pl-11 font-semibold text-[#5409cd]">ID</TableHead>
                                <TableHead className=" font-semibold text-[#5409cd]">Category Name</TableHead>
                                <TableHead className=" font-semibold text-[#5409cd] text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody >
                            {categories.map((item) => (
                                <TableRow key={item.id} className="h-15">
                                    <TableCell className="xl:pl-10">{item.id}</TableCell>
                                    <TableCell>  {item.name}</TableCell>
                                    <TableCell className="flex items-center justify-center">
                                        <button onClick={() => handleEditClick(item)} className="text-[#6e2dfab3] cursor-pointer ">
                                            <PencilSparkles className=" size-5" />
                                        </button>
                                        <button onClick={() => handleDeleteCategory(item.id)} className="ml-3 text-red-600 cursor-pointer">
                                            <Trash className="size-5" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    )
}