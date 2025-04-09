import { Experience } from "../typings"

export const fetchExperiences = async () => {
	try {
		const res = await fetch("/api/getExperiences") // Relative URL
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const experiences: Experience[] = data.experiences
		return experiences
	} catch (error) {
		console.error("Error fetching experiences:", error)
		throw error
	}
}
