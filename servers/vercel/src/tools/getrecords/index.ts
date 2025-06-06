import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecords",
  "toolDescription": "List existing DNS records",
  "baseUrl": "https://api.vercel.com",
  "path": "/v4/domains/{domain}/records",
  "method": "get",
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
      "domain": "domain"
    },
    "query": {
      "limit": "limit",
      "since": "since",
      "until": "until",
      "teamId": "teamId",
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool