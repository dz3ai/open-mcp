import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n")
}