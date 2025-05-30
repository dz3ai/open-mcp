import { z } from "zod"

export const inputParamsSchema = {
  "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter.").optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupName` parameter.").optional(),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "name": z.string().describe("This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional()
}