import { z } from "zod"

import { todoFormSchema } from "./schema"

export type TTodoForm = z.infer<typeof todoFormSchema>
