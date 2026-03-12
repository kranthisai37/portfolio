import { motion } from "framer-motion"
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaServer, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiDjango, SiMysql } from "react-icons/si"

const skills = [
{ name: "Python", icon: <FaPython className="text-yellow-400 text-3xl"/> },
{ name: "Django", icon: <SiDjango className="text-green-400 text-3xl"/> },
{ name: "REST API", icon: <FaServer className="text-green-400 text-3xl"/> },
{ name: "React", icon: <FaReact className="text-cyan-400 text-3xl"/> },
{ name: "JavaScript", icon: <FaJs className="text-yellow-300 text-3xl"/> },
{ name: "SQL", icon: <SiMysql className="text-blue-400 text-3xl"/> },
{ name: "Oracle", icon: <FaDatabase className="text-red-500 text-3xl"/> },
{ name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl"/> },
{ name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl"/> },
{ name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl"/> }
]

export default function Skills(){

return(

<section
id="skills"
className="py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white"
>

{/* Title */}

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
>
My Skills
</motion.h2>


{/* Skills Grid */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto px-6">

{skills.map((skill,i)=>(

<motion.div
key={i}
whileHover={{scale:1.1}}
whileTap={{scale:0.95}}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.4}}
className="relative group"
>

{/* Glow Border */}

<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>


{/* Card */}

<div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl flex flex-col items-center gap-3 shadow-lg">

{skill.icon}

<span className="text-lg font-medium">
{skill.name}
</span>

</div>

</motion.div>

))}

</div>

</section>

)

}