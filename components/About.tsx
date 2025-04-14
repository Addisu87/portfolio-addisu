import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "../typings"
import { urlFor } from "../lib/sanity"
import Image from "next/image"
import Head from "next/head"

type Props = {
	pageInfo: PageInfo | null
}

const About = ({ pageInfo }: Props) => {
	return (
		<>
			<Head>
				<title>About Me | Portfolio</title>
				<meta
					name="description"
					content="Learn more about my background and experience"
				/>
			</Head>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="section-container"
			>
				<div className="section-header">
					<h3 className="section-title">About</h3>
				</div>

				<div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-10">
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
						<h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F7AB0A]">
							Here&apos;s my{" "}
							<span className="underline decoration-[#F7AB0A]/50">background</span>
						</h4>
						<p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
							{pageInfo?.backgroundInformation}
						</p>
					</motion.div>
				</div>
			</motion.div>
		</>
	)
}

export default About
