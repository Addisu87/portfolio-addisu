import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as SkillType } from "../typings"
import Head from "next/head"

type Props = {
	skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
	return (
		<>
			<Head>
				<title>My Skills | Portfolio</title>
				<meta name="description" content="Explore my technical skills and expertise" />
			</Head>
			<div className="section-container">
				<div className="section-header">
					<h3 className="section-title">Skills</h3>
					<h3 className="section-subtitle">
						Hover over or tap a skill for current proficiency
					</h3>
				</div>

				<div className="w-full flex items-center justify-center py-10">
					<motion.div 
						className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-5 md:gap-7"
					>
						{skills?.map((skill) => (
							<Skill key={skill._id} skill={skill} />
						))}
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Skills
