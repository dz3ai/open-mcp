import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the log drain to be deleted"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}