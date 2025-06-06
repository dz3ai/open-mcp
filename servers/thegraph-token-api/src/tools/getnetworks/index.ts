import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnetworks",
  "toolDescription": "Get supported networks of the API",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/networks",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool