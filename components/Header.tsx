import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"
import { Social } from "../typings"
import { EnvelopeIcon } from "@heroicons/react/24/solid"

type Props = {
	socials: Social[]
}

const Header = ({ socials }: Props) => {
	const motionProps = {
		initial: { opacity: 0, scale: 0.5 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 1.5 },
	}

	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				{...motionProps}
				initial={{ x: -500, ...motionProps.initial }}
				animate={{ x: 0, ...motionProps.animate }}
				className="flex flex-row items-center"
			>
				{socials?.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="gray"
						bgColor="transparent"
						target="_blank"
						rel="noopener noreferrer"
					/>
				))}
			</motion.div>

			<motion.div
				{...motionProps}
				initial={{ x: 500, ...motionProps.initial }}
				animate={{ x: 0, ...motionProps.animate }}
			>
				<Link
					href="#contact"
					scroll={false}
					className="group flex flex-row items-center text-gray-300 cursor-pointer"
					aria-label="Contact section"
				>
					<div className="animate-pulse">
						<EnvelopeIcon className="h-10 w-10 text-gray-400 group-hover:text-[#F7AB0A]/80 transition-colors duration-300" />
					</div>
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400 pl-4 group-hover:text-[#F7AB0A]/80 transition-colors duration-300">
						Get In Touch
					</p>
				</Link>
			</motion.div>
		</header>
	)
}

export default Header
