import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/legacy/image"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../sanity"

type Props = {
	pageInfo: PageInfo | null
}

const Hero = ({ pageInfo }: Props) => {
	const [text] = useTypewriter({
		words: [
			`Hello, my name is ${pageInfo?.name || "Developer"}`,
			"I am a Full Stack Developer",
			"I am an Enthusiastic Developer",
			"I am a Freelancer",
		],
		loop: true,
		delaySpeed: 2000,
	})

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />

			{pageInfo?.heroImage && (
				<div className="relative w-32 h-32 mx-auto">
					<Image
						className="rounded-full object-cover"
						src={urlFor(pageInfo?.heroImage).url()}
						alt={pageInfo?.name || "Developer profile"}
						layout="fill"
						priority
					/>
				</div>
			)}

			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo?.role || "Software Developer"}
				</h2>

				<h2 className="text-3xl lg:text-5xl font-light px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h2>

				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
