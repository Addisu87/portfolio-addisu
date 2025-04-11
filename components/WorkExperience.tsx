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
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
		>
			<h3 className="section-title">Experience</h3>

			{/* Cards Container */}
			<div className="w-full flex space-x-5 p-10 pt-32 snap-x snap-mandatory overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				<div className="flex items-center space-x-5 justify-center">
					{experiences?.map((experience) => (
						<ExperienceCard key={experience._id} experience={experience} />
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default WorkExperience
