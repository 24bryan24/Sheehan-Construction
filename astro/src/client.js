import client from "@sanity/client";

export default client({
  projectId: "qkyc4uum",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-07",
});
