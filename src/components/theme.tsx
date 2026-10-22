"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunMedium, Moon, Monitor } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Theme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { value: "light", icon: SunMedium },
    { value: "dark", icon: Moon },
    { value: "system", icon: Monitor },
  ]

  let ActiveIcon = Monitor

  if (theme === "light") {
    ActiveIcon = SunMedium
  } else if (theme === "dark") {
    ActiveIcon = Moon
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ActiveIcon />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="dark:text-current mt-2">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value)}
        >
          <DropdownMenuRadioItem value="light"  className="focus:bg-[#F1EBFE] text-[#031381]">
            <SunMedium />
            Light
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="dark" className="focus:bg-[#F1EBFE] text-[#031381]">
            <Moon />
            Dark
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="system" className="focus:bg-[#F1EBFE] text-[#031381]">
            <Monitor />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}