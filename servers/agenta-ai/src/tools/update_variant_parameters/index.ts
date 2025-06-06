import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_variant_parameters",
  "toolDescription": "Update Variant Parameters",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/variants/{variant_id}/parameters",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "variant_id": "variant_id"
    },
    "body": {
      "parameters": "parameters",
      "commit_message": "commit_message"
    }
  },
  inputParamsSchema
}

export default tool