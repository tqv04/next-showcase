
import './App.css'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {ScrollTrigger} from 'gsap/ScrollTrigger'
function App() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
        const tl = gsap.timeline({
           scrollTrigger: {
        trigger: "#section-1",
        start: "top top",
        markers: true,
        scrub: true,
        endTrigger: "#section-4",
        end: "bottom bottom"
      }})
        tl.to("html", {
        backgroundColor: "green "
      })
  },[])
  return (
    <main>
      <section id="section-1">section1 </section>
      <section id="section-2">section2</section>
      <section id="section-3">section3</section>
      <section id="section-4"> section4</section>
    </main> 
  )
}

export default App
