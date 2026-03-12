import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >

          <div className="relative group">

            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500"></div>

            <img
              src="/pic.jpeg"
              alt="profile"
              className="relative w-64 h-64 object-cover rounded-full border border-white/10"
            />

          </div>

        </motion.div>


        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I am an aspiring <span className="text-blue-400 font-semibold">Full Stack Developer</span> passionate about building scalable web applications and solving real-world problems using technology.
            I specialize in backend development using <span className="text-purple-400">Python, Django, and RestAPI</span> and create modern user interfaces with <span className="text-blue-400">React</span>.
          </p>


          {/* Skills */}
          <div className="flex flex-wrap gap-4">

            {[
              "Python",
              "Django",
              "RESTAPI",
              "HTML",
              "CSS",
              "Bootstrap",
              "React",
              "JavaScript",
              "SQL"
            ].map((skill, i) => (

              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg text-sm hover:bg-blue-500/20 transition"
              >
                {skill}
              </motion.span>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About