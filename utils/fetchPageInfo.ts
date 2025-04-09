import { PageInfo } from "../typings"

export const fetchPageInfo = async () => {
	try {
		const res = await fetch("/api/getPageInfo") // Relative URL

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
