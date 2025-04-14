import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { Experience } from "../typings"
import Head from "next/head"

type Props = {
	experiences: Experience[]
}
const WorkExperience = ({ experiences }: Props) => {
	return (
		<>
			<Head>
				<title>Work Experience | Portfolio</title>
				<meta name="description" content="My professional work experience and career history" />
			</Head>
			<motion.div className="section-container">
				<div className="section-header">
					<h3 className="section-title">Experience</h3>
				</div>

				<div className="w-full">
					<div className="flex space-x-8 p-5 md:p-10 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
						{experiences?.map((experience, i) => (
							<ExperienceCard 
								key={experience._id} 
								experience={experience} 
								index={i} 
								total={experiences.length} 
							/>
						))}
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default WorkExperience
