import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: '4hryu0oj',
  dataset: "production",
  apiversion: "2023-01-20",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN   ,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
