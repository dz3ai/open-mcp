import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_saved_episodes",
  "toolDescription": "Get User's Saved Episodes",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/episodes",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "market": "market",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool