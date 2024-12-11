import { useSuspenseQuery } from "@tanstack/react-query"
import axios from "axios"

import { todoFormSchema } from "../configs/schema"

const getTodo = async () => {
  const { data } = await axios.get("https://get.geojs.io/v1/ip/country.json")

  const validation = todoFormSchema.safeParse(data)
  if (validation.success) {
    return data
  }
  return []
}

export const useGetTodo = () => {
  return useSuspenseQuery({
    queryKey: ["todo"],
    queryFn: getTodo,
  })
}
