import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { PageInfo } from "../../typings"

const query = groq`
  *[_type == "pageInfo"][0]
`

type Data = {
	pageInfo: PageInfo
	error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		if (!sanityClient.config.projectId) {
			throw new Error("Sanity project ID is not configured")
		}

		console.log("Fetching pageInfo from Sanity...")
		const pageInfo: PageInfo = await sanityClient.fetch(query)

		if (!pageInfo) {
			throw new Error("No pageInfo data returned from Sanity")
		}

		console.log("PageInfo fetched successfully")
		res.status(200).json({ pageInfo })
	} catch (error) {
		console.error("Error in getPageInfo API:", error)
		res.status(500).json({
			pageInfo: null as any,
			error: error instanceof Error ? error.message : "Unknown error occurred",
		})
	}
}
