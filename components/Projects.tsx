import React from "react"
import { motion } from "framer-motion"
import { Project } from "../typings"
import ProjectCard from "./ProjectCard"
import Head from "next/head"

type Props = {
	projects: Project[]
}

const Projects = ({ projects }: Props) => {
	return (
		<>
			<Head>
				<title>My Projects | Portfolio</title>
				<meta name="description" content="View my latest projects and work" />
			</Head>
			<motion.div className="section-container">
				<div className="section-header">
					<h3 className="section-title">Projects</h3>
				</div>

				<div className="w-full">
					<div className="flex space-x-8 p-5 md:p-10 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
						{projects?.map((project, i) => (
							<ProjectCard 
								key={project._id} 
								project={project} 
								index={i} 
								total={projects.length} 
							/>
						))}
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Projects
