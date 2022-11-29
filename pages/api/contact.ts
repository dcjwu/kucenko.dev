import sgMail from "@sendgrid/mail"
import Joi from "joi"
import { createRouter } from "next-connect"

import { validationMiddleware } from "@service/sendgrid/validationMiddleware"

import type { NextApiRequest, NextApiResponse } from "next"

export const config = { api: { externalResolver: true } }

sgMail.setApiKey(process.env.SENDGIRD ?? "")

const PostEmailDto = Joi.object({
   name: Joi.string().required(),
   email: Joi.string().required().email(),
   topic: Joi.string().required(),
   message: Joi.string().required()
})

const router = createRouter<NextApiRequest, NextApiResponse>()

router
   .post(validationMiddleware({ body: PostEmailDto }), async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
      const {
         name,
         email,
         topic,
         message
      } = request.body

      const messageToSend = {
         to: "aleksejs@kucenko.dev",
         from: "aleksejs@kucenko.dev",
         subject: topic,
         html: `<style>
                   body {
                       background-color: #F7F7FB;
                       font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,
                       "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
                       "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                       font-size: 16px;
                       line-height: 1.5;
                       color: #1A1A1A;
                   }
                </style>
               <div>
                   <p>Hey,</p>
                   <p>You have received new email from <b>${email}</b>.</p>
                   <p>Name: <b>${name}</b></p>
                   <p>Message: <b>${message}</b></p>
               </div>`
      }

      sgMail.send(messageToSend)

         .then(res => {
            if (res[0].statusCode === 202) {
               return response.status(200).json({ message: "Message sent successfully" })
               
            } else {
               return response.status(400).json({ message: "Unexpected response" })
            }
         })

         .catch(err => {
            if (err.code === 400) {
               return response.status(400).json({ message: err.response.body.errors[0].message })
               
            } else {
               return response.status(err.code).json({ message: "Something went wrong" })
            }
         })

   })

export default router.handler({
   onError: (err: unknown, req: NextApiRequest, res: NextApiResponse) => {
      console.error(err)
      res.status(500).end("Internal server error")
   },
   onNoMatch: (req, res) => {
      res.status(405).end("Method not allowed")
   },
})
