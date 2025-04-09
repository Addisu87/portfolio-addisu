import { Project } from "../typings"

export const fetchProjects = async () => {
	try {
		const res = await fetch("/api/getProjects") // Relative URL
		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
		const data = await res.json()
		const projects: Project[] = data.projects
		return projects
	} catch (error) {
		console.error("Error fetching projects:", error)
		throw error
	}
}
