import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_client_templates_client_scope_id_protocol",
  "toolDescription": "Update the mapper",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "name": "name",
      "protocol": "protocol",
      "protocolMapper": "protocolMapper",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool