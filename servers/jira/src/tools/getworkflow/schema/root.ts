import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the workflow scheme."),
  "workflowName": z.string().describe("The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.").optional(),
  "returnDraftIfExists": z.boolean().describe("Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.").optional()
}