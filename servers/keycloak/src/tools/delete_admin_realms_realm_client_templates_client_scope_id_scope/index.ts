import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_client_templates_client_scope_id_scope",
  "toolDescription": "Remove a set of realm-level roles from the client's scope",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool