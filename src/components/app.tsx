import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { contacts } from "../api/contacts"
import { Contact } from "../types"
import ComboBox from "./combobox"

interface IFormInput {
  contact: Contact
}

export const App = () => {
  const { control, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center gap-6"
        >
          <Controller
            name="contact"
            control={control}
            defaultValue={contacts[0]}
            render={({ field }) => <ComboBox {...field} />}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  )
}
