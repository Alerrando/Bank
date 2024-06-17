import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["development", "test"]),
  API_URL: z.string().url(),
  ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
});

export const env = envSchema.parse({
  MODE: "development" || "test",
  API_URL: "http://localhost:8080",
  ENABLE_API_DELAY: "true"
});
