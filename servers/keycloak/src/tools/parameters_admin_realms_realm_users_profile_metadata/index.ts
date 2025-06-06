import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_admin_realms_realm_users_profile_metadata",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/profile/metadata",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool