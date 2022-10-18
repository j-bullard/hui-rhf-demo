import React from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { contacts } from "../api/contacts"
import { Contact } from "../types"
import ComboBox from "./combobox"

interface IFormInput {
  contact: Contact
}

export const App = () => {
  const { control, watch } = useForm<IFormInput>({
    mode: "all",
    defaultValues: {
      contact: contacts[0]
    }
  })

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400">
        <div className="w-full max-w-sm">
          <form>
            <Controller
              name="contact"
              control={control}
              defaultValue={contacts[0]}
              render={({ field }) => <ComboBox {...field} />}
            />
          </form>

          <pre className="mt-4 w-full rounded-lg bg-teal-200 p-4 shadow-sm">
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </div>
      </div>
    </>
  )
}
