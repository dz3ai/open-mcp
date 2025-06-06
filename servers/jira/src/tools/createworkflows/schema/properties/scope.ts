import { z } from "zod"

export const inputParamsSchema = {
  "project": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `project` to the tool, first call the tool `expandSchema` with \"/properties/scope/properties/project\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Project ID details.</property-description>").optional(),
  "type": z.enum(["PROJECT","GLOBAL"]).describe("The scope of the workflow. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.").optional()
}