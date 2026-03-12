import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { FaPaperPlane } from "react-icons/fa"

export default function Contact(){

const form = useRef()
const [loading,setLoading] = useState(false)
const [success,setSuccess] = useState(false)

const sendEmail = (e) => {

e.preventDefault()
setLoading(true)

emailjs.sendForm(
"service_n44ulzf",
"template_kiwp8x9",
form.current,
"nksBhDFgAV5aLnCFy"
)

.then(()=>{
setLoading(false)
setSuccess(true)
})

.catch(()=>{
setLoading(false)
alert("Failed to send message")
})

}

return(

<section
id="contact"
className="py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white"
>

{/* Title */}

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
>
Contact Me
</motion.h2>


{/* Contact Card */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-xl"
>

{/* Availability */}

<p className="text-green-400 mb-6 text-center">
🟢 Available for Internship / Entry-Level Developer Roles
</p>


<form
ref={form}
onSubmit={sendEmail}
className="flex flex-col gap-6"
>

{/* Name */}

<input
type="text"
name="name"
placeholder="Your Name"
required
className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
/>

{/* Email */}

<input
type="email"
name="email"
placeholder="Your Email"
required
className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
/>

{/* Message */}

<textarea
name="message"
rows="4"
placeholder="Your Message"
required
className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
/>


{/* Button */}

<button
type="submit"
disabled={loading}
className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
>

{loading ? "Sending..." : (
<>
<FaPaperPlane/>
Send Message
</>
)}

</button>

</form>


{/* Success Message */}

{success && (

<p className="text-green-400 mt-6 text-center">
✅ Message sent successfully!
</p>

)}

</motion.div>

</section>

)
}