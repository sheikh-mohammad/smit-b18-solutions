import { PROJECT_URL, PUBLISH_KEY } from "./config.js";

const { createClient } = supabase;

const client = createClient(PROJECT_URL, PUBLISH_KEY);

console.log(client);
console.log(supabase);
