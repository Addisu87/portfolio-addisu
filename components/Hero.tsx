import { useTypewriter } from "react-simple-typewriter"
import Image from "next/image"
import Link from "next/link"
import { PageInfo } from "../typings"
import { urlFor } from "../lib/sanity"
import BackgroundCircles from "./BackgroundCircles"

type Props = {
	pageInfo: PageInfo | null
}

const navigationItems = [
	{ href: "#about", text: "About" },
	{ href: "#experience", text: "Experience" },
	{ href: "#skills", text: "Skills" },
	{ href: "#projects", text: "Projects" },
] as const

const Hero = ({ pageInfo }: Props) => {
	const [text] = useTypewriter({
		words: [
			`Hi, I'm ${pageInfo?.name || "Developer"}`,
			"Full Stack Developer",
			"Problem Solver",
			"Code Enthusiast",
		],
		loop: true,
		delaySpeed: 2000,
	})

	return (
		<div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
			{/* Container for BackgroundCircles and content */}
			<div className="relative flex flex-col items-center">
				<BackgroundCircles />

				{/* Profile Image - Adjusted size */}
				{pageInfo?.heroImage && (
					<div className="relative aspect-square w-28 md:w-32 xl:w-36 rounded-full overflow-hidden ring-4 ring-[#F7AB0A]/20 transition-transform hover:scale-105 mt-8">
						<Image
							src={urlFor(pageInfo.heroImage).url()}
							alt={pageInfo?.name || "Developer profile"}
							fill
							sizes="(max-width: 768px) 112px, (max-width: 1280px) 128px, 144px"
							priority
							className="object-cover"
						/>
					</div>
				)}

				{/* Text Content */}
				<div className="z-20 mt-12 max-w-7xl">
					{/* Role */}
					<h2 className="text-sm md:text-base text-gray-500 uppercase tracking-[15px] text-center w-full px-4">
						{pageInfo?.role || "Software Developer"}
					</h2>

					{/* Typewriter Text */}
					<div className="h-16 sm:h-20 flex items-center justify-center mt-4">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-4 min-w-[200px] sm:min-w-[300px] md:min-w-[400px]">
							<span>{text}</span>
							<span className="animate-pulse text-[#F7AB0A]">|</span>
						</h1>
					</div>

					{/* Navigation Buttons */}
					<nav className="flex flex-wrap justify-center gap-3 mt-8">
						{navigationItems.map(({ href, text }) => (
							<Link key={href} href={href} className="heroButton">
								{text}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Hero
