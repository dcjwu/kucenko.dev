import React from "react"

import s from "@components/Burger/BurgerMenu/BurgerMenu.module.scss"
import { colorGrey300, colorGrey600 } from "@constants/styles"
import { dbConnect } from "@db/contact"
import { useDesignHover } from "@hooks/useDesignHover"
import { Text } from "@lib/Text/Text"

export const BurgerMenuContacts: React.FC = (): JSX.Element => {

   const [hasMounted, activeField, wasElementHovered, handleMouseEnter, handleMouseLeave] = useDesignHover()

   return (
      <div className={s.contacts} role="presentation" onMouseLeave={handleMouseLeave}>
         {hasMounted && <ul>
            <li>
               <a href={`mailto:${dbConnect.email}`} onMouseEnter={(): void => handleMouseEnter("email")}>
                  <svg fill="none" height="20" viewBox="0 0 26 20"
                       width="26" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 1H25V18C25 18.2652 24.8946 18.5196 24.7071 18.7071C24.5196 18.8946 24.2652 19 24 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V1Z"
                        stroke={"email" !== activeField && wasElementHovered ? colorGrey600 : colorGrey300}
                        strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d="M25 1L13 12L1 1"
                           stroke={"email" !== activeField && wasElementHovered ? colorGrey600 : colorGrey300}
                           strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="1.5"/>
                  </svg>
                  <Text color="300" component="span"
                        style={{ color: "email" !== activeField && wasElementHovered ? colorGrey600 : "" }}
                        variant="paragraph-lg">
                     {dbConnect.email}
                  </Text>
               </a>
            </li>
            <li>
               <a href={`tel:${dbConnect.phone}`}
                  onMouseEnter={(): void => handleMouseEnter("phone")}>
                  <svg fill="none" height="25" viewBox="0 0 25 25"
                       width="25" xmlns="http://www.w3.org/2000/svg">
                     <path d="M7.5625 12.6C8.59153 14.725 10.3098 16.4389 12.4375 17.4625C12.5944 17.5368 12.768 17.569 12.9412 17.5558C13.1143 17.5427 13.2811 17.4846 13.425 17.3875L16.55 15.3C16.6881 15.2063 16.8476 15.1492 17.0137 15.1339C17.1799 15.1186 17.3471 15.1456 17.5 15.2125L23.35 17.725C23.5499 17.8082 23.717 17.9548 23.8254 18.1423C23.9338 18.3298 23.9776 18.5477 23.95 18.7625C23.7646 20.2097 23.0582 21.5397 21.9631 22.5037C20.8679 23.4677 19.459 23.9997 18 24C13.4913 24 9.1673 22.2089 5.97918 19.0208C2.79107 15.8327 1 11.5087 1 6.99998C1.00033 5.54098 1.53227 4.13208 2.49628 3.03692C3.4603 1.94177 4.79033 1.2354 6.2375 1.04998C6.4523 1.02239 6.67021 1.06617 6.85768 1.17459C7.04515 1.28301 7.19178 1.45004 7.275 1.64998L9.7875 7.51248C9.85284 7.66291 9.88017 7.82711 9.86709 7.9906C9.85401 8.15409 9.80092 8.31185 9.7125 8.44998L7.625 11.625C7.53206 11.7686 7.47752 11.9336 7.46657 12.1043C7.45563 12.275 7.48866 12.4457 7.5625 12.6V12.6Z"
                        stroke={"phone" !== activeField && wasElementHovered ? colorGrey600 : colorGrey300}
                        strokeLinecap="round"
                        strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d="M17 3H22V8"
                           stroke={"phone" !== activeField && wasElementHovered ? colorGrey600 : colorGrey300}
                           strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="1.5"/>
                     <path d="M16 9L22 3"
                           stroke={"phone" !== activeField && wasElementHovered ? colorGrey600 : colorGrey300}
                           strokeLinecap="round"
                           strokeLinejoin="round" strokeWidth="1.5"/>
                  </svg>
                  <Text color="300" component="span"
                        style={{ color: "phone" !== activeField && wasElementHovered ? colorGrey600 : "" }}
                        variant="paragraph-lg">
                     {dbConnect.phone}
                  </Text>
               </a>
            </li>
         </ul>}
      </div>
   )
}