import { PageInfo } from "../typings"

export const fetchPageInfo = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	try {
		const res = await fetch(`${baseUrl}/api/getPageInfo`)
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`)
		}
		const data = await res.json()
		const pageInfo: PageInfo = data.pageInfo

		return pageInfo
	} catch (error) {
		console.error("Detailed fetch error:", error)
		throw error
	}
}
