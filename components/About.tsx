import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "../typings"
import { urlFor } from "../lib/sanity"

type Props = {
	pageInfo: PageInfo | null
}

const About = ({ pageInfo }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-16 sm:top-24 uppercase tracking-[16px] text-gray-500 text-xl sm:text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={urlFor(pageInfo?.profilePic).url()}
				alt=""
				className="mt-24 sm:mt-32 md:mt-0 flex-shrink-0 w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
			/>

			<div className="space-y-4 sm:space-y-8 px-0 md:px-10 mt-4 sm:mt-8 md:mt-0">
				<h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#F7AB0A] line-clamp-1">
					Background
				</h4>
				<p className="text-base sm:text-xl font-light max-w-3xl">
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	)
}

export default About
