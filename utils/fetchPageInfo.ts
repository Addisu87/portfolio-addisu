import { PageInfo } from "../typings"

export const fetchPageInfo = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
	}

	try {
		console.log(`Fetching from: ${baseUrl}/api/getPageInfo`)
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
