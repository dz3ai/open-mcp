import { z } from "zod"

export const inputParamsSchema = {
  "integrationConfigurationId": z.string(),
  "integrationProductIdOrSlug": z.string(),
  "resourceId": z.string(),
  "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()),
  "partial": z.boolean().describe("If true, will only update the provided secrets").optional()
}