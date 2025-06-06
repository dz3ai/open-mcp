import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_organizations_org_id_members_invite_user",
  "toolDescription": "Invites an existing user or sends a registration link to a new user, based on the provided e-mail address.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members/invite-user",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool