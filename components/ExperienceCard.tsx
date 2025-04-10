import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "../lib/sanity"

type Props = {
	experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden shadow-lg shadow-black/20 cursor-pointer">
			{/* Header Section */}
			<div className="relative w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 bg-[#1f1f1f] border-b border-gray-700">
				{/* Company Logo & Title Container */}
				<div className="flex items-center gap-2 sm:gap-3 md:gap-4">
					<motion.img
						initial={{ opacity: 0 }}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover object-center border-2 border-[#F7AB0A]/40"
						src={urlFor(experience?.companyImage).url()}
						alt={experience?.company}
					/>
					<div className="flex-1">
						<h4 className="text-sm sm:text-base md:text-lg lg:text-xl  font-bold text-[#F7AB0A] line-clamp-1">
							{experience?.jobTitle}
						</h4>
						<p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">
							{experience?.company}
						</p>
						<p className="text-xs md:text-sm text-gray-400">
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
				<div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2 mt-2 sm:mt-3">
					{experience.technologies.map((technology) => (
						<motion.img
							key={technology._id}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-white/10 p-1 hover:bg-white/20 transition-all duration-200"
							src={urlFor(technology.image).url()}
							alt={technology.title || "Technology"}
						/>
					))}
				</div>
			</div>

			{/* Content Section */}
			<div className="px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F7AB0A]/60">
				{/* Points/Achievements */}
				<ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
					{experience.points?.map((point, i) => (
						<li
							key={i}
							className="relative pl-3 sm:pl-4 md:pl-5 text-xs sm:text-sm md:text-base selection:text-gray-300 before:absolute before:left-0 before:top-[0.5em] before:h-1 before:w-1  before:rounded-full before:bg-[#F7AB0A]/60"
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
