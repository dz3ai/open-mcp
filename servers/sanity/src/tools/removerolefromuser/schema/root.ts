import { z } from "zod"

export const inputParamsSchema = {
  "resourceType": z.enum(["organization","project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
  "sanityUserId": z.string().describe("The User ID"),
  "roleName": z.string().describe("The role name.")
}