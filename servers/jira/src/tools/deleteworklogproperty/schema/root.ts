import { z } from "zod"

export const inputParamsSchema = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "worklogId": z.string().describe("The ID of the worklog."),
  "propertyKey": z.string().describe("The key of the property.")
}