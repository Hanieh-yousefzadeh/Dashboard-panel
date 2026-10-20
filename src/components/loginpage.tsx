"use client"

import { mockUsers } from "@/data/mock-users"
import { dispatchType, stateType } from "@/lib/store"
import { login } from "@/redux/authSlice"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Card,CardHeader,CardDescription,CardContent, CardTitle } from "@/components/ui/card"




export default function LoginPage() {
    const router = useRouter()
    const user = useSelector((state: stateType) => state.auth.user)
    const dispatch = useDispatch<dispatchType>()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setError("")
        const currentUser = mockUsers.find((user) => (
            user.email === email.trim() && user.password === password
        ))

        if (!currentUser) {
            setError("password or email incorrect")
            return
        }

        dispatch(login({
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            role: currentUser.role
        }))

        router.replace("/panel")
    }

    return (

        <main className="flex pt-40 items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md p-7">
                <CardHeader className="text-center pb-9">
                    <CardTitle className="text-2xl"> Login to your account</CardTitle>
                    <CardDescription> Enter your email and password  </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8" >
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter yor password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <p  className="text-sm text-red-600">{error}</p>
                        )}

                        <Button type="submit" className="w-full"> login </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )

}