import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "../lib/sanity"

type Props = {
	experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article
			className="
			flex flex-col rounded-lg items-center w-full max-w-[95vw] md:max-w-[600px] h-[450px] md:h-[500px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden flex-shrink-0"
		>
			{/* Header Section */}
			<div className="relative w-full px-5 md:px-8 py-2 md:py-3 bg-[#1f1f1f] border-b border-gray-700">
				{/* Company Logo & Title Container */}
				<div className="flex items-center gap-3 md:gap-4">
					<motion.img
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2 }}
						className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover object-center border-2 border-[#F7AB0A]/40"
						src={urlFor(experience?.companyImage).url()}
						alt={experience?.company}
					/>
					<div className="flex-1">
						<h4 className="text-base md:text-xl font-bold text-[#F7AB0A] line-clamp-1">
							{experience?.jobTitle}
						</h4>
						<p className="text-sm md:text-base font-medium text-gray-300">
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
				<div className="flex flex-wrap items-center gap-1.5 md:gap-2 mt-2 md:mt-3">
					{experience.technologies.map((technology) => (
						<motion.img
							key={technology._id}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="h-8 w-8 rounded-full bg-white/10 p-1"
							src={urlFor(technology.image).url()}
							alt={technology.title || "Technology"}
						/>
					))}
				</div>
			</div>

			{/* Content Section */}
			<div className="px-5 md:px-8 py-2 flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F7AB0A]/60">
				<ul className="space-y-2 md:space-y-3">
					{experience.points?.map((point, i) => (
						<li
							key={i}
							className="relative pl-4 md:pl-5 text-sm md:text-base text-gray-300 before:absolute before:left-0 before:top-[0.5em] before:h-1 before:w-1 before:rounded-full before:bg-[#F7AB0A]/60"
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
