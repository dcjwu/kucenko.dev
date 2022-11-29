import React from "react"

import { setCookie } from "cookies-next"

import { Button } from "@lib/Button/Button"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./CookiesConsent.module.scss"

type CookiesConsent = {
   consentSetter: React.Dispatch<React.SetStateAction<boolean>>
}

export const CookiesConsent: React.FC<CookiesConsent> = ({ consentSetter }): JSX.Element => {

   React.useEffect(() => {
      document.body.style.overflow = "hidden"
   }, [])
   
   const handleCookie = (value: string): void => {
      setCookie("kucenko-root", value)
      consentSetter(false)
      document.body.style.overflow = ""
   }

   return (
      <div className={s.wrapper}>
         <Heading color="1000" component="p" style={{ marginBottom: "1.6rem" }}
                  variant="h3">
            Cookie consent
         </Heading>
         <Text color="1000" component="p" style={{ maxWidth: "48ch" }}
               variant="paragraph">
            We use cookies in order to ensure our website’s functionality and collect anonymous analytical data. You can
            accept all cookies by clicking “Accept”.
         </Text>
         <div className={s.button}>
            <Button ariaLabel="reject-cookies" variant="primary" onClick={(): void => handleCookie("reject")}>
                  Reject all
            </Button>
            <Button ariaLabel="accept-cookies" variant="primary" onClick={(): void => handleCookie("accept")}>
                  Accept
            </Button>
         </div>
      </div>
   )
}
