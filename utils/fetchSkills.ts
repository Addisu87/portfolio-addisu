import { Skill } from "../typings"

export const fetchSkills = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
	}

	const res = await fetch(`${baseUrl}/api/getSkills`)
	const data = await res.json()
	const skills: Skill[] = data.skills

	return skills
}
