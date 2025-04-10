import React from "react"
import { motion } from "framer-motion"
import { Project } from "../typings"
import { urlFor } from "../lib/sanity"
import Link from "next/link"
import Image from "next/image"
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

type Props = {
	projects: Project[]
}

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative h-screen flex flex-col max-w-7xl mx-auto px-4 sm:px-8 md:px-10 justify-evenly items-center"
		>
			<h3 className="absolute top-24 sm:top-28 uppercase tracking-[12px] text-gray-500 text-xl sm:text-2xl">
				Projects
			</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-12 sm:mt-16">
				{projects?.map((project, i) => (
					<motion.div
						key={project._id}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2 }}
						viewport={{ once: true }}
						className="flex-shrink-0 snap-center flex flex-col items-center justify-center w-screen md:w-[600px] lg:w-[900px] h-screen pt-12 sm:pt-16"
					>
						<motion.div
							initial={{ y: -50, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="relative w-72 sm:w-[450px] md:w-[600px] lg:w-[750px] h-[175px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
						>
							{project?.image && (
								<Image
									src={urlFor(project.image).url()}
									alt={project.title || "Project Image"}
									fill
									className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 object-contain bg-gray-800"
									sizes="(max-width: 768px) 288px, (max-width: 1200px) 600px, 750px"
								/>
							)}
						</motion.div>

						<div className="space-y-4 sm:space-y-6 px-4 md:px-8 max-w-6xl mt-6 sm:mt-8">
							<div className="flex items-center justify-center space-x-4">
								{project?.sourceCode && (
									<Link
										href={project.sourceCode}
										target="_blank"
										className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2"
									>
										<CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5" />
										<span className="text-sm sm:text-base">Code</span>
									</Link>
								)}
								{project?.linkToBuild && (
									<Link
										href={project.linkToBuild}
										target="_blank"
										className="flex items-center space-x-2 bg-[#F7AB0A] text-black hover:bg-[#F7AB0A]/80 transition-colors duration-200 rounded-lg px-3 sm:px-4 py-2"
									>
										<GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5" />
										<span className="text-sm sm:text-base">Live Demo</span>
									</Link>
								)}
							</div>

							<h4 className="text-base sm:text-lg md:text-xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									Project {i + 1} of {projects.length}:
								</span>{" "}
								{project?.title}
							</h4>

							<div className="flex flex-wrap justify-center gap-2">
								{project?.technologies?.map((technology) => (
									<div key={technology._id} className="relative group">
										<div className="relative w-6 h-6 sm:w-8 sm:h-8">
											{technology.image && (
												<Image
													src={urlFor(technology.image).url()}
													alt={technology.title || "Technology Icon"}
													fill
													className="rounded-full filter group-hover:grayscale transition duration-300 ease-in-out object-cover"
													sizes="(max-width: 768px) 24px, 32px"
												/>
											)}
										</div>
									</div>
								))}
							</div>

							<div className="text-xs sm:text-sm md:text-base text-center text-gray-300 md:text-left max-w-prose mx-auto">
								{project?.summary}
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/30 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	)
}

export default Projects
