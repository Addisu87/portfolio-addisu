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
			<div className="min-h-screen relative flex flex-col items-center justify-center text-center">
				<h3 className="section-title">Skills</h3>

				<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
					Hover over or tap a skill for current proficiency
				</h3>

				<motion.div className="grid grid-cols-4 gap-3 md:gap-4 w-fit max-w-[90vw] md:max-w-[600px] mt-20 px-4">
					{skills?.slice(0, skills.length / 2).map((skill) => (
						<Skill key={skill._id} skill={skill} />
					))}

					{skills?.slice(skills.length / 2, skills.length).map((skill) => (
						<Skill key={skill._id} skill={skill} directionLeft />
					))}
				</motion.div>
			</div>
		</>
	)
}

export default Skills
