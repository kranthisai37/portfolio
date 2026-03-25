import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero(){

return(

<section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">

{/* Background Glow */}

<div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 top-[-100px] left-[-100px]"></div>
<div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 bottom-[-100px] right-[-100px]"></div>


{/* Hero Content */}

<motion.h1
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-5xl md:text-6xl font-bold mb-6"
>

Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Kranthi</span>

</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.4}}
className="text-xl text-gray-400 max-w-xl"
>
Full Stack Developer specializing in Python, Django, FastAPI, and modern React applications.
</motion.p>


{/* Buttons */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.6}}
className="flex gap-6 mt-10 flex-wrap justify-center"
>

<a
href="#projects"
className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition shadow-lg"
>
View Projects
</a>


<a
href="https://github.com/kranthisai37"
target="_blank"
className="px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 rounded-lg flex items-center gap-2 transition"
>
<FaGithub/>
GitHub
</a>

<a
href="https://linkedin.com/in/kranthi-sai-526344311"
target="_blank"
className="px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 rounded-lg flex items-center gap-2 transition"
>
<FaLinkedin/>
LinkedIn
</a>

</motion.div>

</section>

)
}