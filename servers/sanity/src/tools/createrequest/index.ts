import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createrequest",
  "toolDescription": "Create a new Request",
  "baseUrl": "https://api.sanity.io",
  "path": "/v2024-07-01/access/{resourceType}/{resourceId}/requests",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "resourceType": "resourceType",
      "resourceId": "resourceId"
    },
    "body": {
      "note": "note",
      "requestUrl": "requestUrl",
      "requestedRole": "requestedRole",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool