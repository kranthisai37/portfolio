import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"

const projects = [
{
title: "Job Portal",
desc: "Full stack job portal built with Django where users can search and apply for jobs.",
github: "https://github.com/sssituser/Python5thbatch_Team5.git",
},

{
title: "E-Commerce",
desc: "Responsive ecommerce website with product catalog and cart functionality.",
github: "https://github.com/kranthisai37/E-commerce-website-.git",
},

{
title: "Netflix Clone",
desc: "Netflix landing page clone built using modern HTML and CSS.",
github: "https://github.com/kranthisai37/Netflix-Clone.git",
},

{
title: "Loan Eligibility Prediction",
desc: "Machine learning system that predicts loan approval based on applicant data.",
github: "https://github.com/kranthisai37/Loan-Eligibility-Prediction-Using-Machine-Learning.git",
},

{
title: "Full Stack E-Commerce",
desc: "React based ecommerce application with backend integration.",
github: "https://github.com/kranthisai37/Full-Stack.git",
},

{
title: "Pixelforge API System",
desc: "REST API backend using Django for managing digital assets.",
github: "https://github.com/kranthisai37/megaminds.git",
}
]

function Projects() {

const [mousePosition,setMousePosition] = useState({x:0,y:0})

const handleMouseMove = (e)=>{
const rect = e.currentTarget.getBoundingClientRect()

setMousePosition({
x: e.clientX - rect.left,
y: e.clientY - rect.top
})
}

return (

<section
id="projects"
className="py-32 bg-transparent text-white"
>

{/* Section Title */}

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl font-bold text-center mb-20"
>
My Projects
</motion.h2>


{/* Projects Grid */}

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 items-stretch">

{projects.map((p,i)=>(

<motion.div
key={i}
onMouseMove={handleMouseMove}
whileHover={{scale:1.05, rotateX:6, rotateY:-6}}
transition={{type:"spring", stiffness:200}}
className="relative group h-full"
>

{/* Spotlight Effect */}

<div
className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
style={{
background:`radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
}}
></div>


{/* Gradient Border */}

<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>


{/* Card */}

<div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-between h-full min-h-[260px]">

<div>

<h3 className="text-2xl font-semibold mb-4">
{p.title}
</h3>

<p className="text-gray-400">
{p.desc}
</p>

</div>


{/* Buttons */}

<div className="flex gap-4 mt-8">

<a
href={p.github}
target="_blank"
className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
>
<FaGithub/>
Code
</a>




</div>

</div>

</motion.div>

))}

</div>

</section>

)
}

export default Projects