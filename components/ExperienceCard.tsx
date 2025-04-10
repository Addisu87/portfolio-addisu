import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "../lib/sanity"

type Props = {
	experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[300px] sm:w-[450px] md:w-[600px] xl:w-[750px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden shadow-lg shadow-black/20 cursor-pointer h-[500px] sm:h-[600px]">
			{/* Content Section */}
			<div className="px-4 sm:px-8 py-4 flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F7AB0A]/60">
				{/* Header Section */}

				{/* Company Logo */}
				<div className="flex justify-center">
					<motion.img
						initial={{ y: -50, opacity: 0 }}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full object-cover object-center border-2 border-[#F7AB0A]/40"
						src={urlFor(experience?.companyImage).url()}
						alt={experience?.company}
					/>
				</div>

				{/* Job Title and Company */}
				<div className="text-center mt-3">
					<h4 className="text-lg sm:text-xl font-bold text-[#F7AB0A]">
						{experience?.jobTitle}
					</h4>
					<p className="text-base sm:text-lg font-medium text-gray-200 mt-1">
						{experience?.company}
					</p>
				</div>

				{/* Date Range */}
				<p className="text-center text-sm text-gray-400 mt-2">
					{new Date(experience.dateStarted).toLocaleDateString("en-US", {
						month: "short",
						year: "numeric",
					})}
					{" - "}
					{experience.isCurrentlyWorkingHere
						? "Present"
						: new Date(experience.dateEnded).toLocaleDateString("en-US", {
								month: "short",
								year: "numeric",
						  })}
				</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap items-center justify-center gap-2 mb-4">
					{experience.technologies.map((technology) => (
						<motion.img
							key={technology._id}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-7 h-7 sm:w-8 sm:h-8 rounded-full 	bg-white/10 p-1 hover:bg-white/20 transition-all duration-200"
							src={urlFor(technology.image).url()}
							alt={technology.title || "Technology"}
						/>
					))}
				</div>

				{/* Points/Achievements */}
				<ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
					{experience.points?.map((point, i) => (
						<li key={i} className="text-left">
							<span className="ml-2">{point}</span>
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
