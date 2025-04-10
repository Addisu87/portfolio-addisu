import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "../typings"

type Props = {
	experiences: Experience[]
}
const WorkExperience = ({ experiences }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="min-h-screen relative flex flex-col text-left 
				max-w-full mx-auto items-center pt-24 sm:pt-32 px-4 sm:px-10"
		>
			<h3
				className="uppercase tracking-[20px] text-gray-500 text-xl 
				sm:text-2xl mb-16 sm:mb-20"
			>
				Experience
			</h3>

			<div
				className="w-full flex space-x-5 overflow-x-scroll pb-8
				snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 
				scrollbar-thumb-[#F7AB0A]/80"
			>
				{experiences?.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	)
}

export default WorkExperience
