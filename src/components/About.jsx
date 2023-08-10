import React from "react"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { services } from "../constants"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="style.sectionSubText">Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                variants={fadeIn("", "", 0.1, 1)}
            >
                With a master&apos;s degree in agricultural sciences and a
                background in the livestock export industry, I developed a
                strong foundation in problem-solving and attention to detail.
                These skills have translated seamlessly into my new career path
                as a software engineer. During my software engineering studies
                with General Assembly, I discovered my passion for combining
                creativity with problem-solving in order to create innovative
                solutions. I also thrive in collaborative environments and enjoy
                working with teams to deliver high-quality results.{" "}
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, i) => {
                    return (
                        <ServiceCard
                            key={service.title}
                            index={i}
                            {...service}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")
