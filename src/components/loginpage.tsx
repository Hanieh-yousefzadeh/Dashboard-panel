"use client"

import { mockUsers } from "@/data/mock-users"
import { dispatchType, stateType } from "@/lib/store"
import { login } from "@/redux/authSlice"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {LockKeyhole ,Mail} from "lucide-react"
import { useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"




export default function LoginPage() {
    const router = useRouter()
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

        <main className="flex w-full">

            <div className="flex flex-col md:flex-row lg:w-[36%] sm:w-[45%]  w-full items-center justify-center bg-white md:p-10">
                <img src="/Logo.png" className="md:hidden  h-26" />
                <Card className="w-full max-w-md md:p-7 px-5 xl:pt-30  border-0 ring-0 shadow-none xl:h-130">
                    <CardHeader className="text-center pb-9">
                        <CardTitle className="lg:text-3xl text-xl font-extrabold md:text-start pb-3">   Welcome Back 👋</CardTitle>
                        <CardDescription className="md:text-start lg:w-70 md:text-base text-sm">Login to your acount and continue your shopping journey with Ecomrace. </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5" >
                            <div className="flex items-center  border rounded-lg px-3 py-1.5 w-full">
                               <Mail className="text-gray-500" size={16}/>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="border-0 bg-white file:bg-white disabled:bg-white focus-visible:ring-0 placeholder:text-sm"
                                />
                            </div>

                            <div className="flex items-center  border rounded-lg px-3 py-1.5 w-full">
                               <LockKeyhole className="text-gray-500" size={16}/>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="border-0 file:bg-white disabled:bg-white focus-visible:ring-0"
                                />
                            </div>

                            {error && (
                                <p className="text-sm text-red-600">{error}</p>
                            )}

                            <Button type="submit" className="w-full bg-[#7925FF] py-5.5 text-lg cursor-pointer hover:bg-[#071499]"> login </Button>
                        </form>
                    </CardContent>
                </Card>


            </div>
            <div className="w-[64%] hidden sm:block sm:h-auto">
                <img src="/Experience.png" className="w-300 xl:h-173.5 h-140" />
            </div>

        </main>
    )

}