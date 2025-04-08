import { PageInfo } from "../typings"

export const fetchPageInfo = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
	}

	const res = await fetch(`${baseUrl}/api/getPageInfo`)
	const data = await res.json()
	const pageInfo: PageInfo = data.pageInfo

	return pageInfo
}
