import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaccountsaccountcapabilitiescapability",
  "toolDescription": "Retrieve an Account Capability",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/accounts/{account}/capabilities/{capability}",
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
      "account": "account",
      "capability": "capability"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool