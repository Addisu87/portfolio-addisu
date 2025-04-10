import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "../lib/sanity"

type Props = {
	experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[580px] xl:w-[680px] h-[400px] sm:h-[480px] md:h-[550px] lg:h-[600px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden shadow-lg shadow-black/20 cursor-pointer">
			{/* Header Section */}
			<div className="relative w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 bg-[#1f1f1f] border-b border-gray-700">
				{/* Company Logo & Title Container */}
				<div className="flex items-center gap-3 sm:gap-4 md:gap-5">
					<motion.img
						initial={{ opacity: 0 }}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover object-center border-2 border-[#F7AB0A]/40"
						src={urlFor(experience?.companyImage).url()}
						alt={experience?.company}
					/>
					<div className="flex-1">
						<h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#F7AB0A] line-clamp-1">
							{experience?.jobTitle}
						</h4>
						<p className="text-sm sm:text-base md:text-lg font-medium text-gray-300">
							{experience?.company}
						</p>
						<p className="text-xs sm:text-sm md:text-base text-gray-400">
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
					</div>
				</div>

				{/* Tech Stack */}
				<div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mt-2 sm:mt-3 md:mt-4">
					{experience.technologies.map((technology) => (
						<motion.img
							key={technology._id}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white/10 p-1 hover:bg-white/20 transition-all duration-200"
							src={urlFor(technology.image).url()}
							alt={technology.title || "Technology"}
						/>
					))}
				</div>
			</div>

			{/* Content Section */}
			<div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F7AB0A]/60">
				{/* Points/Achievements */}
				<ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
					{experience.points?.map((point, i) => (
						<li
							key={i}
							className="relative pl-4 sm:pl-5 md:pl-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 before:absolute before:left-0 before:top-[0.5em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#F7AB0A]/60"
						>
							{point}
						</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExperienceCard
