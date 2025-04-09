import { Social } from "../typings"

export const fetchSocial = async () => {
	try {
		const res = await fetch("/api/getSocials") // Relative URL
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const socials: Social[] = data.socials
		return socials
	} catch (error) {
		console.error("Error fetching socials:", error)
		throw error
	}
}
