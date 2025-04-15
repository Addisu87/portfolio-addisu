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
		<article className="flex flex-col rounded-lg items-center flex-shrink-0 snap-center w-[300px] md:w-[600px] h-[500px] md:h-[600px] bg-[#292929] hover:bg-[#313131] transition-all duration-200  overflow-hidden p-5 md:p-8">
			{/* Header Section */}
			<div className="relative w-full bg-[#1f1f1f] rounded-t-lg border-b border-gray-700 mb-4">
				<div className="flex items-center justify-between p-4">
					<h4 className="text-2xl md:text-3xl font-bold text-[#F7AB0A]">
						{project?.title}
					</h4>
					<span className="text-sm md:text-base text-gray-400">
						{index + 1} of {total}
					</span>
				</div>
				<div className="flex gap-2 px-4 pb-4 overflow-x-auto">{technologies}</div>
			</div>

			{/* Project Image */}
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="relative w-full h-[200px] md:h-[300px] mb-4"
			>
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={project?.title || "Project Image"}
						fill
						className="rounded-lg object-cover bg-[#1f1f1f]"
						sizes="(max-width: 768px) 300px, 600px"
						loading="lazy"
						quality={75}
					/>
				)}
			</motion.div>

			{/* Project Summary */}
			<div className="flex-grow">
				<p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
					{project?.summary}
				</p>
				{projectLinks}
			</div>
		</article>
	)
}

export default ProjectCard
