import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpaymentintentsintent",
  "toolDescription": "Retrieve a PaymentIntent",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/payment_intents/{intent}",
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
      "intent": "intent"
    },
    "query": {
      "client_secret": "client_secret",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool