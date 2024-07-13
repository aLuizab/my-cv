"use client"

import { useEffect } from "react"

function Dots() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.visualViewport?.scale === 1) {
        const body = document.body
        const { clientX: s, clientY: t } = e
        body.style.setProperty("--x", `${s}px`)
        body.style.setProperty("--y", `${t}px`)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <div className="fixed left-0 top-0 -z-50">
      <div className="sticky left-0 top-0 h-screen w-screen overflow-hidden">
        <div className="bg-muted-foreground/20 absolute inset-0 z-[-1]"></div>
        <div className="bg-gradient-radial from-muted-foreground/50 absolute left-[--x] top-[--y] z-[-1] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full from-0% to-transparent to-90% blur-md"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="dotted-pattern"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="black"></circle>
            </pattern>
            <mask id="dots-mask">
              <rect width="100%" height="100%" fill="white"></rect>
              <rect
                width="100%"
                height="100%"
                fill="url(#dotted-pattern)"
              ></rect>
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="hsl(var(--background))"
            mask="url(#dots-mask)"
          ></rect>
        </svg>
      </div>
    </div>
  )
}

export default Dots
