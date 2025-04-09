import { Skill } from "../typings"

export const fetchSkills = async () => {
	try {
		const res = await fetch("/api/getSkills") // Relative URL
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const skills: Skill[] = data.skills
		return skills
	} catch (error) {
		console.error("Error fetching skills:", error)
		throw error
	}
}
