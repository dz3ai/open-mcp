import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `lead` Returns information about the project lead.\n *  `projectKeys` Returns all project keys associated with the project.").optional(),
  "recent": z.number().int().describe("Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.").optional(),
  "properties": z.array(z.string()).describe("A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional()
}