import { useTheme } from "@material-ui/core"
import "particles.js"
import * as React from "react"

const divId = "particles-js"

export default function Particles({ className }: { className?: string }) {
  const color = useTheme().palette.grey[500]
  React.useEffect(() => {
    particlesJS(divId, {
      interactivity: {
        detect_on: "window",
        events: { onclick: { enable: false } },
        modes: { grab: { distance: 233, line_linked: { opacity: 0.5 } } },
      },
      particles: {
        color: { value: color },
        line_linked: { color, distance: 233 },
        move: { random: true, speed: 0.5 },
        number: { density: { enable: true, value_area: 1597 }, value: 89 },
        size: { random: true, value: 3 },
      },
      retina_detect: true,
    })
  })
  return <div id={divId} className={className} />
}
