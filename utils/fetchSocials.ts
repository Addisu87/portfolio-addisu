import { Social } from "../typings"

export const fetchSocial = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
	}

	const res = await fetch(`${baseUrl}/api/getSocials`)
	const data = await res.json()
	const socials: Social[] = data.socials

	return socials
}
