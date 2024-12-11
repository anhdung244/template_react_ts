import { z } from "zod"

import { ETodoStatus } from "./enum"

export const todoFormSchema = z.object({
  name: z.string().min(1, { message: "name required" }),
  status: z.nativeEnum(ETodoStatus),
})
