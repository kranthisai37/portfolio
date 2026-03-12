import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Navbar() {
  return (

<motion.nav
initial={{y:-80}}
animate={{y:0}}
transition={{duration:0.6}}
className="fixed top-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/10 z-50"
>

<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">

{/* Logo */}

<h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
Kranthi
</h1>


{/* Navigation Links */}

<div className="hidden md:flex items-center gap-8 text-sm font-medium">

<a href="#about" className="relative group">
About
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
</a>

<a href="#skills" className="relative group">
Skills
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
</a>

<a href="#projects" className="relative group">
Projects
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
</a>

<a href="#contact" className="relative group">
Contact
<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
</a>

</div>


{/* Social Icons */}

<div className="flex items-center gap-5 text-xl">

<a
href="https://github.com/kranthisai37"
target="_blank"
className="hover:text-blue-400 transition"
>
<FaGithub/>
</a>

<a
href="https://linkedin.com"
target="_blank"
className="hover:text-blue-400 transition"
>
<FaLinkedin/>
</a>

</div>

</div>

</motion.nav>

  )
}

export default Navbar