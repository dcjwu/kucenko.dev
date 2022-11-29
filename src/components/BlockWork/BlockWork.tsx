import React from "react"

import { Accordion } from "@components/BlockWork/Accordion"
import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"

export const BlockWork: React.FC = (): JSX.Element => {
   return (
      <>
         <Accordion/>
         <Heading color="1000" component="p" style={{
            textAlign: "center",
            marginBottom: "3.2rem"
         }}
                  variant="h1">
            Ready?
         </Heading>
         <form action="https://calendly.com/aleksejs-kucenko/15-min" rel="noreferrer" style={{
            display: "flex",
            justifyContent: "center"
         }}
               target="_blank">
            <Button ariaLabel="schedule-a-call" variant="secondary">
               Schedule a call
            </Button>
         </form>
      </>
   )
}
