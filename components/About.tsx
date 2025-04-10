import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "../typings"
import { urlFor } from "../lib/sanity"
import Image from "next/image"

type Props = {
	pageInfo: PageInfo | null
}

const About = ({ pageInfo }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex flex-col text-center md:text-left max-w-7xl mx-auto items-center justify-evenly px-4 md:px-10"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-32 md:mt-0">
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2 }}
					className="relative w-56 h-56 md:w-[350px] md:h-[450px] xl:w-[400px] xl:h-[500px] flex-shrink-0"
				>
					<Image
						src={urlFor(pageInfo?.profilePic).url()}
						alt="Profile picture"
						fill
						className="rounded-full md:rounded-lg object-cover"
						sizes="(max-width: 768px) 224px, (max-width: 1280px) 350px, 400px"
						priority
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, delay: 0.2 }}
					className="space-y-5 px-0 md:px-10 max-w-3xl"
				>
					<h4 className="text-3xl md:text-4xl font-semibold text-[#F7AB0A]">
						Here&apos;s my{" "}
						<span className="underline decoration-[#F7AB0A]/50">background</span>
					</h4>
					<p className="text-base md:text-lg text-gray-300 leading-relaxed">
						{pageInfo?.backgroundInformation}
					</p>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default About
