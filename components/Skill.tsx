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
				initial={{
					x: directionLeft ? -100 : 100,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className="rounded-full border border-gray-500 object-cover  w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out bg-white/10 p-1"
				src={urlFor(skill?.image).url()}
				alt={skill.title}
			/>

			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-xl sm:text-2xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	)
}

export default Skill
