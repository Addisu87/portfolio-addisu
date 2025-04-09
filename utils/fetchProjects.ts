import { Project } from "../typings"

export const fetchProjects = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	try {
		const res = await fetch(`${baseUrl}/api/getProjects`)
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const projects: Project[] = data.projects
		return projects
	} catch (error) {
		console.error("Error fetching projects:", error)
		throw error
	}
}
