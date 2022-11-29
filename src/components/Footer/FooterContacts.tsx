import React from "react"

import s from "@components/Footer/Footer.module.scss"
import { colorBrand, colorGrey600 } from "@constants/styles"
import { dbConnect } from "@db/contact"
import { useDesignHover } from "@hooks/useDesignHover"
import { Text } from "@lib/Text/Text"

export const FooterContacts: React.FC = (): JSX.Element => {

   const [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave] = useDesignHover()

   return (
      <div>
         <Text isBold color="white" component="p"
               style={{ marginBottom: "1.6rem" }}
               variant="paragraph-lg">
            <span style={{ color: colorBrand }}>C</span>ontact me
         </Text>

         {hasMounted && <ul className={s.list} role="presentation" onMouseLeave={handleMouseLeave}>
            <li>
               <a href={`mailto:${dbConnect.email}`} onMouseEnter={(): void => handleMouseEnter("email")}>
                  <Text color="white" component="span"
                        style={{ color: "email" !== activeField && wasElementHovered ? colorGrey600 : "" }}
                        variant="paragraph">
                     {dbConnect.email}
                  </Text>
               </a>
            </li>
            <li>
               <a href={`tel:${dbConnect.phone}`}
                  onMouseEnter={(): void => handleMouseEnter("phone")}>
                  <Text color="white" component="span"
                        style={{ color: "phone" !== activeField && wasElementHovered ? colorGrey600 : "" }}
                        variant="paragraph">
                     {dbConnect.phone}
                  </Text>
               </a>
            </li>
         </ul>}
      </div>
   )
}
