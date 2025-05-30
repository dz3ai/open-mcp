import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `all` Returns all expandable information\n *  `field` Returns information about any custom fields assigned to receive an event\n *  `group` Returns information about any groups assigned to receive an event\n *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information\n *  `projectRole` Returns information about any project roles assigned to receive an event\n *  `user` Returns information about any users assigned to receive an event").optional()
}