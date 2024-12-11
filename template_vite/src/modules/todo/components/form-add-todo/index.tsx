import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@mantine/core"
import { Suspense } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { defaultTodoForm } from "../../configs/constants"
import { todoFormSchema } from "../../configs/schema"
import { TTodoForm } from "../../configs/types"

const FormAddTodo = () => {
  const form = useForm<TTodoForm>({
    defaultValues: defaultTodoForm,
    resolver: zodResolver(todoFormSchema),
  })

  const onSubmit = (data: TTodoForm) => console.log(data)

  return (
    <Suspense>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-4">
            <label htmlFor="name">Name</label>
            <input className="border p-2" {...form.register("name")} />
          </div>
          <div className="mt-4 flex items-center gap-4">
            <label htmlFor="status">Status</label>
            <input className="border p-2" {...form.register("status")} />
          </div>
          <Button>Submit</Button>
        </form>
      </FormProvider>
    </Suspense>
  )
}

export default FormAddTodo
