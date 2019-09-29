import "particles.js"
import * as React from "react"

const divId = "particles-js"

export default function Welcome({ className }: { className?: string }) {
  React.useEffect(() => {
    particlesJS(divId, {
      interactivity: {
        events: { onclick: { enable: false } },
        modes: { grab: { distance: 233, line_linked: { opacity: 0.5 } } },
      },
      particles: {
        line_linked: { distance: 233 },
        move: { random: true, speed: 0.25 },
        number: { density: { enable: true, value_area: 1597 }, value: 89 },
        size: { random: true, value: 3 },
      },
      retina_detect: true,
    })
  })
  return <div id={divId} className={className} />
}
