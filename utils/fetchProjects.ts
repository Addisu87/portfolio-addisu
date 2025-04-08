import { Project } from '../typings';

export const fetchProjects = async () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	if (!baseUrl) {
		throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
	}

	const res = await fetch(`${baseUrl}/api/getProjects`);

	if (!res.ok) {
		throw new Error(`Failed to fetch projects: ${res.status}`);
	}

	const data = await res.json();
	const projects: Project[] = data.projects;

	// console.log('fetching', projects);

	return projects;
};
