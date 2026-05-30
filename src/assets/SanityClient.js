import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "tj1tybhh",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-12-22",
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
