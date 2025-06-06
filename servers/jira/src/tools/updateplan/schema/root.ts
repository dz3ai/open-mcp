import { z } from "zod"

export const inputParamsSchema = {
  "planId": z.number().int().describe("The ID of the plan."),
  "useGroupId": z.boolean().describe("Whether to accept group IDs instead of group names. Group names are deprecated.").optional()
}