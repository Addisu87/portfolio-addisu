import { Experience } from "../typings"

export const fetchExperiences = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	try {
		const res = await fetch(`${baseUrl}/api/getExperiences`)
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const experiences: Experience[] = data.experiences
		return experiences
	} catch (error) {
		console.error("Error fetching experiences:", error)
		throw error
	}
}
