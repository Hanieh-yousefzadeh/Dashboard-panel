"use client"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { stateType, dispatchType } from "@/lib/store"
import { login} from "@/redux/authSlice"


export default function AuthStorage() {
    const dispatch = useDispatch<dispatchType>()
    const user = useSelector((state: stateType) => state.auth.user)
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const saved = localStorage.getItem("user")
        if(saved){
            dispatch(login(JSON.parse(saved)))
        }
        setLoaded(true)
    },[dispatch])

    useEffect(() => {
    if (!loaded) return;

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [loaded, user]);


    return null
}