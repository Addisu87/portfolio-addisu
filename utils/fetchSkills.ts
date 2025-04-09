import { Skill } from "../typings"

export const fetchSkills = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	try {
		const res = await fetch(`${baseUrl}/api/getSkills`)
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const skills: Skill[] = data.skills
		return skills
	} catch (error) {
		console.error("Error fetching skills:", error)
		throw error
	}
}
