import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "radar_station",
  "toolDescription": "Returns metadata about a given radar station",
  "baseUrl": "https://api.weather.gov",
  "path": "/radar/stations/{stationId}",
  "method": "get",
  "security": [
    {
      "key": "User-Agent",
      "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
      "in": "header",
      "envVarName": "USER_AGENT"
    }
  ],
  "paramsMap": {
    "query": {
      "reportingHost": "reportingHost",
      "host": "host"
    }
  },
  inputParamsSchema
}

export default tool