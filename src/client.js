import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Read from env with safe fallbacks for local development
const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || "4hryu0oj";
const dataset = process.env.REACT_APP_SANITY_DATASET || "production";
const apiVersion = "2024-01-20"; // YYYY-MM-DD

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
