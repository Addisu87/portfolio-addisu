import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Project } from "../typings"
import ProjectCard from "./ProjectCard"

type Props = {
	projects: Project[]
}

const Projects = ({ projects }: Props) => {
	// Memoize the projects to prevent unnecessary re-renders
	const projectsList = useMemo(
		() =>
			projects?.map((project, i) => (
				<div
					key={project._id}
					className="snap-center flex-shrink-0 flex items-center justify-center w-[95vw] md:w-[600px] mt-16"
				>
					<ProjectCard project={project} index={i} total={projects.length} />
				</div>
			)),
		[projects],
	)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }} // Add this to prevent re-animation on scroll
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				<div className="flex space-x-8 p-5 md:p-10 mt-4">{projectsList}</div>
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	)
}

export default Projects
