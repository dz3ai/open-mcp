import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_workspaces_workspaceid_",
  "toolDescription": "Get workspace",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/workspaces/{workspaceId}",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "workspaceId": "workspaceId"
    }
  },
  inputParamsSchema
}

export default tool