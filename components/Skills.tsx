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
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="section-container"
			>
				<div className="section-header">
					<h3 className="section-title">Skills</h3>
					<h3 className="section-subtitle">
						Hover over a skill for current proficiency
					</h3>
				</div>

				<div className="section-content">
					<div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 md:gap-6">
						{/* First row */}
						{skills?.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
							<Skill key={skill._id} skill={skill} directionLeft />
						))}
						{/* Second row */}
						{skills?.slice(Math.ceil(skills.length / 2), skills.length).map((skill) => (
							<Skill key={skill._id} skill={skill} />
						))}
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Skills
