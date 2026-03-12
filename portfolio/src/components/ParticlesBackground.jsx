import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"

export default function ParticlesBackground(){

const particlesInit = useCallback(async (engine)=>{
await loadSlim(engine)
},[])

return(

<Particles
id="tsparticles"
init={particlesInit}

className="fixed top-0 left-0 w-full h-full -z-10"

options={{

background:{
color:"transparent"
},

particles:{
number:{value:100},
size:{value:{min:1,max:3}},
move:{enable:true,speed:0.5},
opacity:{value:0.6},
color:{value:"#ffffff"}
}

}}

 />

)
}