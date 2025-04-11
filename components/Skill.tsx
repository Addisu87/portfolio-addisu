import React from "react"
import { motion } from "framer-motion"
import { Skill as SkillType } from "../typings"
import { urlFor } from "../lib/sanity"

type Props = {
	skill: SkillType
	directionLeft?: boolean
}

const Skill = ({ skill, directionLeft }: Props) => {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{ x: directionLeft ? -60 : 60, opacity: 0 }}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20  filter group-hover:grayscale transition duration-300 ease-in-out  group-active:grayscale"
				src={urlFor(skill?.image).url()}
				alt={skill.title}
			/>

			<div className="absolute opacity-0 group-hover:opacity-80 group-active:opacity-80 transition duration-300 ease-in-out group-hover:bg-white group-active:bg-white rounded-full z-0 w-16 h-16 md:w-20 md:h-20">
				<div className="flex items-center justify-center h-full">
					<p className="text-base md:text-xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	)
}

export default Skill
