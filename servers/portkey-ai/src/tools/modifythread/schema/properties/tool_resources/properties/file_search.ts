import { z } from "zod"

export const inputParamsSchema = {
  "vector_store_ids": z.array(z.string()).max(1).describe("The [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.\n").optional()
}