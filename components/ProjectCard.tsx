import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Project } from "../typings"
import { urlFor } from "../lib/sanity"
import Link from "next/link"
import Image from "next/image"
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

type Props = {
	project: Project
	index: number
	total: number
}

const ProjectCard = ({ project, index, total }: Props) => {
	// Memoize the technology images to prevent unnecessary re-renders
	const technologies = useMemo(
		() =>
			project?.technologies?.map((technology) => (
				<motion.img
					key={technology._id}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="h-8 w-8 rounded-full bg-white/10 p-1"
					src={urlFor(technology.image).url()}
					alt={technology.title || "Technology"}
				/>
			)),
		[project?.technologies],
	)

	// Memoize the project links
	const projectLinks = useMemo(
		() => (
			<div className="flex gap-3">
				{project?.sourceCode && (
					<Link
						href={project.sourceCode}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-2 text-base"
					>
						<CodeBracketIcon className="w-5 h-5" />
						<span>Code</span>
					</Link>
				)}
				{project?.linkToBuild && (
					<Link
						href={project.linkToBuild}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 bg-[#F7AB0A] text-black hover:bg-[#F7AB0A]/80 rounded-lg px-4 py-2 text-base"
					>
						<GlobeAltIcon className="w-5 h-5" />
						<span>Live</span>
					</Link>
				)}
			</div>
		),
		[project?.sourceCode, project?.linkToBuild],
	)

	// Memoize the project image URL
	const imageUrl = useMemo(
		() => (project?.image ? urlFor(project.image).url() : ""),
		[project?.image],
	)

	return (
		<article className="flex flex-col rounded-lg items-center w-full max-w-[95vw] md:max-w-[600px] h-[450px] md:h-[500px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden flex-shrink-0">
			{/* Header Section */}
			<div className="relative w-full px-5 md:px-8 py-2 md:py-3 bg-[#1f1f1f] border-b border-gray-700">
				{/* Title and Project Number */}
				<div className="flex items-center justify-between mb-4">
					<h4 className="text-2xl md:text-3xl font-bold text-[#F7AB0A]">
						{project?.title}
					</h4>
					<span className="text-sm md:text-base text-gray-400">
						{index + 1} of {total}
					</span>
				</div>

				{/* Tech Stack and Links Row */}
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
					{/* Tech Stack */}
					<div className="flex flex-wrap gap-3">{technologies}</div>

					{projectLinks}
				</div>
			</div>

			{/* Content Section */}
			<div className="px-5 md:px-8 py-2 flex-1 w-full overflow-y-auto">
				{/* Project Image */}
				<motion.div
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2 }}
					viewport={{ once: true }}
					className="relative w-full h-[220px] md:h-[280px] mb-2"
				>
					{imageUrl && (
						<Image
							src={imageUrl}
							alt={project?.title || "Project Image"}
							fill
							className="rounded-lg object-contain bg-[#1f1f1f]"
							sizes="(max-width: 768px) 95vw, 600px"
							loading="lazy"
							quality={75}
						/>
					)}
				</motion.div>

				{/* Project Summary */}
				<p className="text-sm md:text-base text-gray-300 leading-relaxed">
					{project?.summary}
				</p>
			</div>
		</article>
	)
}

export default ProjectCard
