import { Social } from "../typings"

export const fetchSocials = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	try {
		const res = await fetch(`${baseUrl}/api/getSocials`)
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const socials: Social[] = data.socials
		return socials
	} catch (error) {
		console.error("Error fetching socials:", error)
		throw error
	}
}
