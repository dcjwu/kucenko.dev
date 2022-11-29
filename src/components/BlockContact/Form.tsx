import React from "react"

import axios from "axios"

import { dbContact } from "@db/contact"
import { Button } from "@lib/Button/Button"

import type { FormType } from "@customTypes/components"

import s from "./Form.module.scss"

const initialState = {
   name: "",
   email: "",
   topic: "",
   message: ""
}

export const Form: React.FC = (): JSX.Element => {

   const ref = React.useRef<HTMLButtonElement>(null)

   const [form, setForm] = React.useState<FormType>(initialState)
   const [loading, setLoading] = React.useState<boolean>()
   const [error, setError] = React.useState<string>("")
   const [success, setSuccess] = React.useState<string>("")

   const handleInputChange = (event: React.SyntheticEvent): void => {
      const target = event.target as HTMLInputElement
      const {
         name,
         value
      } = target

      setForm({
         ...form,
         [name]: value
      })
   }

   const handleFormSubmit = async (event: React.SyntheticEvent): Promise<void> => {
      event.preventDefault()
      setLoading(true)

      await axios.post("api/contact", form)

         .then(res => {
            setError("")
            if (res.status === 200) {
               setSuccess("Email sent successfully")

               setTimeout(() => {
                  setForm(initialState)
                  setSuccess("")
               }, 2500)

            } else {
               setError("Unexpected response")
            }

         })

         .catch(err => {
            setError(err.response.message)
         })

         .finally(() => {
            setLoading(false)
         })

      ref.current && ref.current.blur()
   }

   return (
      <form className={s.form} onSubmit={handleFormSubmit}>
         <input required name="name" placeholder="Name"
                type="text" value={form.name}
                onChange={handleInputChange}/>
         <input required name="email" placeholder="Email address"
                type="email" value={form.email}
                onChange={handleInputChange}/>
         <input required name="topic" placeholder="Topic"
                type="text"
                value={form.topic}
                onChange={handleInputChange}/>
         <textarea required name="message" placeholder="Write your message here"
                   rows={3} value={form.message}
                   onChange={handleInputChange}></textarea>
         <Button ref={ref} ariaLabel="email-us" error={error}
                 loading={loading} success={success}
                 variant="primary">
            {dbContact.page.buttonL}
         </Button>
      </form>
   )
}
