import { Project } from "../typings"

export const fetchProjects = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
	}

	const res = await fetch(`${baseUrl}/api/getProjects`)
	const data = await res.json()
	const projects: Project[] = data.projects

	return projects
}
