import React from "react"
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
	return (
		<article className="flex flex-col rounded-lg items-center w-full max-w-[95vw] md:max-w-[600px] h-[550px] md:h-[600px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden flex-shrink-0">
			{/* Header Section */}
			<div className="relative w-full px-5 md:px-8 py-4 md:py-6 bg-[#1f1f1f] border-b border-gray-700">
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
				<div className="flex justify-between items-center">
					{/* Tech Stack */}
					<div className="flex flex-wrap gap-3">
						{project?.technologies?.map((technology) => (
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

					{/* Project Links */}
					<div className="flex gap-3">
						{project?.sourceCode && (
							<Link
								href={project.sourceCode}
								target="_blank"
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
								className="flex items-center space-x-2 bg-[#F7AB0A] text-black hover:bg-[#F7AB0A]/80 rounded-lg px-4 py-2 text-base"
							>
								<GlobeAltIcon className="w-5 h-5" />
								<span>Live</span>
							</Link>
						)}
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="px-5 md:px-8 py-6 flex-1 w-full">
				{/* Project Image */}
				<motion.div
					initial={{ y: -20, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative w-full h-[250px] md:h-[300px] mb-6"
				>
					{project?.image && (
						<Image
							src={urlFor(project.image).url()}
							alt={project.title || "Project Image"}
							fill
							className="rounded-lg object-cover"
							sizes="(max-width: 768px) 95vw, 600px"
						/>
					)}
				</motion.div>

				{/* Project Summary */}
				<p className="text-base md:text-lg text-gray-300 leading-relaxed">
					{project?.summary}
				</p>
			</div>
		</article>
	)
}

export default ProjectCard
