import { Experience } from "../typings"

export const fetchExperiences = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
	}

	const res = await fetch(`${baseUrl}/api/getExperiences`)

	if (!res.ok) {
		throw new Error(`Failed to fetch experiences: ${res.status}`)
	}

	const data = await res.json()
	const experiences: Experience[] = data.experiences

	// console.log('fetching', experiences);

	return experiences
}
