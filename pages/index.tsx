import Head from "next/head"
import type { GetStaticProps } from "next"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import WorkExperience from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"
import Link from "next/link"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSocial } from "../utils/fetchSocials"
import { HomeModernIcon } from "@heroicons/react/24/solid"

type Props = {
	pageInfo: PageInfo | null
	experiences: Experience[]
	skills: Skill[]
	projects: Project[]
	socials: Social[]
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
			<Head>
				<title>{pageInfo?.name || "Portfolio"} portfolio</title>
			</Head>

			<Header socials={socials || []} />

			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences || []} />
			</section>

			<section id="skills" className="snap-start">
				<Skills skills={skills || []} />
			</section>

			<section id="projects" className="snap-start">
				<Projects projects={projects || []} />
			</section>

			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex flex-col">
						<HomeModernIcon className="self-end w-7 h-7 mr-12 animate-pulse filter grayscale hover:grayscale-0 transparent cursor-pointer" />
					</div>
				</footer>
			</Link>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
	try {
		const pageInfo: PageInfo = await fetchPageInfo()
		const experiences: Experience[] = await fetchExperiences()
		const skills: Skill[] = await fetchSkills()
		const projects: Project[] = await fetchProjects()
		const socials: Social[] = await fetchSocial()

		return {
			props: {
				pageInfo,
				experiences,
				skills,
				projects,
				socials,
			},
			revalidate: 10,
		}
	} catch (error) {
		console.error("Error fetching data:", error)
		return {
			props: {
				pageInfo: null,
				experiences: [],
				skills: [],
				projects: [],
				socials: [],
			},
			revalidate: 10,
		}
	}
}
