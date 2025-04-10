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
			className="relative flex flex-col items-center max-w-7xl mx-auto py-12 sm:py-16 md:py-20"
		>
			<h3 className="uppercase tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
				Experience
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{experiences?.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	)
}

export default WorkExperience
