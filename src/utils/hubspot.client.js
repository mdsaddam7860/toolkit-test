import { createClient } from "@mohammadsaddam-dev/hubspot-toolkit";

const client = createClient({
  accessToken: process.env.HUBSPOT_API_KEY,
});

export { client };
