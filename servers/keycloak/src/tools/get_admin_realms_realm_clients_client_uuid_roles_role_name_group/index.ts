import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_roles_role_name_group",
  "toolDescription": "Returns a stream of groups that have the specified role name",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/groups",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "role-name": "role-name"
    },
    "query": {
      "briefRepresentation": "briefRepresentation",
      "first": "first",
      "max": "max"
    }
  },
  inputParamsSchema
}

export default tool