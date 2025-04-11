import React from "react"
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skill as SkillType } from "../typings"

type Props = {
	skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
	return (
		<div className="h-screen relative flex flex-col items-center justify-center text-center">
			<h3 className="section-title">Skills</h3>

			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for current proficiency
			</h3>

			<motion.div className="grid grid-cols-4 gap-2 md:gap-4 w-fit max-w-[600px] mt-20">
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}

				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<Skill key={skill._id} skill={skill} directionLeft />
				))}
			</motion.div>
		</div>
	)
}

export default Skills
