import { z } from "zod"

export const inputParamsSchema = {
  "promptPartialId": z.string(),
  "name": z.string().optional(),
  "string": z.string().optional(),
  "description": z.string().optional(),
  "status": z.string().optional()
}