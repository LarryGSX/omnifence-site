"use client"

import { useEffect, useState } from "react"
import { Particles } from "@/components/ui/particles"

export function ParticlesDemo() {
  const [color, setColor] = useState("#1F75FE") // Using our primary color

  useEffect(() => {
    // Set color based on theme or use our brand color
    setColor("#1F75FE")
  }, [])

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
