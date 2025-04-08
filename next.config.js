/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdn.sanity.io"],
	},
	env: {
		BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
}

module.exports = nextConfig
