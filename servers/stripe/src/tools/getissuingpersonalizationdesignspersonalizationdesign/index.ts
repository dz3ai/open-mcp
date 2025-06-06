import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getissuingpersonalizationdesignspersonalizationdesign",
  "toolDescription": "Retrieve a personalization design",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/issuing/personalization_designs/{personalization_design}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "personalization_design": "personalization_design"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool