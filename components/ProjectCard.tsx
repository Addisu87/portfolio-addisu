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
		<article className="flex flex-col rounded-lg items-center w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[500px] md:h-[550px] snap-center bg-[#292929] hover:bg-[#313131] transition-all duration-200 overflow-hidden flex-shrink-0">
			{/* Header Section */}
			<div className="relative w-full px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 bg-[#1f1f1f] border-b border-gray-700">
				{/* Title and Project Number */}
				<div className="flex items-center justify-between mb-4">
					<h4 className="text-xl font-bold text-[#F7AB0A]">{project?.title}</h4>
					<span className="text-sm text-gray-400">
						{index + 1} of {total}
					</span>
				</div>

				{/* Tech Stack and Links Row */}
				<div className="flex justify-between items-center">
					{/* Tech Stack */}
					<div className="flex flex-wrap gap-2">
						{project?.technologies?.map((technology) => (
							<motion.img
								key={technology._id}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className="h-6 w-6 rounded-full bg-white/10 p-1"
								src={urlFor(technology.image).url()}
								alt={technology.title || "Technology"}
							/>
						))}
					</div>

					{/* Project Links */}
					<div className="flex gap-2">
						{project?.sourceCode && (
							<Link
								href={project.sourceCode}
								target="_blank"
								className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-1 text-sm"
							>
								<CodeBracketIcon className="w-4 h-4" />
								<span>Code</span>
							</Link>
						)}
						{project?.linkToBuild && (
							<Link
								href={project.linkToBuild}
								target="_blank"
								className="flex items-center space-x-1 bg-[#F7AB0A] text-black hover:bg-[#F7AB0A]/80 rounded-lg px-3 py-1 text-sm"
							>
								<GlobeAltIcon className="w-4 h-4" />
								<span>Live</span>
							</Link>
						)}
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="px-3 sm:px-4 md:px-5 lg:px-6 py-4 flex-1 w-full">
				{/* Project Image */}
				<motion.div
					initial={{ y: -20, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative w-full h-[200px] mb-4"
				>
					{project?.image && (
						<Image
							src={urlFor(project.image).url()}
							alt={project.title || "Project Image"}
							fill
							className="rounded-lg object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					)}
				</motion.div>

				{/* Project Summary */}
				<p className="text-sm text-gray-300">{project?.summary}</p>
			</div>
		</article>
	)
}

export default ProjectCard
