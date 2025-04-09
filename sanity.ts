import { createClient } from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
<<<<<<< HEAD
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2022-11-16',
  useCdn: process.env.NODE_ENV === 'production'
};
=======
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	apiVersion: "2023-10-20", // Use current date
	useCdn: process.env.NODE_ENV === "production",
}
>>>>>>> dev

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Helper function for generating Image URLs with only the asset reference data in your documents
export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source)
