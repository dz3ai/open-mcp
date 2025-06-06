import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_evaluation_scenario_score_router_human_evaluations_evaluatio",
  "toolDescription": "Get Evaluation Scenario Score Router",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/human-evaluations/evaluation_scenario/{evaluation_scenario_id}/score",
  "method": "get",
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
      "evaluation_scenario_id": "evaluation_scenario_id"
    }
  },
  inputParamsSchema
}

export default tool