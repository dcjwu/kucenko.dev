import React from "react"

import classNames from "classnames/bind"

import { Battery } from "@lib/Battery/Battery"
import { Text } from "@lib/Text/Text"

import type { AccordionItemType } from "@customTypes/components"

import s from "./AccordionItem.module.scss"

const cx = classNames.bind(s)

export const AccordionItem: React.FC<AccordionItemType> = ({
   isItemExpanded,
   setIsItemExpanded,
   header,
   subheader,
   battery,
   data,
}): JSX.Element => {

   const buttonRef = React.useRef<HTMLButtonElement>(null)

   const classNamesItem = cx(s.item, { open: isItemExpanded === battery })
   const classNamesContent = cx(s.content, { open: isItemExpanded === battery })

   const handleToggleAccordion = (): void => {

      const buttonElement = buttonRef.current

      if (buttonElement) {
         buttonElement.blur()
      }

      if (isItemExpanded === battery) {
         setIsItemExpanded("")
      } else {
         setIsItemExpanded(battery)
      }
   }

   return (
      <div className={s.wrapper}>
         <button ref={buttonRef} className={classNamesItem}
                 onClick={handleToggleAccordion}>
            <span className={s.left}>
               <Battery variant={battery}/>
               <Text color={isItemExpanded !== battery ? "white" : "600"} component="span" variant="paragraph">
                  {header}
               </Text>
            </span>
            <span className={s.expand}>
               <span className={s.horizontal}></span>
               <span className={s.vertical}></span>
            </span>
         </button>

         <div className={classNamesContent}>
            <div className={s.heading}>

               {subheader.map(item => (
                  <Text key={item} isBold color="white"
                        component="p"
                        variant="paragraph">
                     {item}
                  </Text>
               ))}

            </div>

            {data.map(item => (
               <div key={item.challenge} className={s.qa}>
                  <div className={s.qaItem}>
                     <svg fill="none" height="32" viewBox="0 0 32 32"
                          width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 23.75C16.6904 23.75 17.25 23.1904 17.25 22.5C17.25 21.8096 16.6904 21.25 16 21.25C15.3096 21.25 14.75 21.8096 14.75 22.5C14.75 23.1904 15.3096 23.75 16 23.75Z"
                              fill="#D4D4D4"/>
                        <path d="M16 18V17C16.6922 17 17.3689 16.7947 17.9445 16.4101C18.5201 16.0256 18.9687 15.4789 19.2336 14.8394C19.4985 14.1999 19.5678 13.4961 19.4327 12.8172C19.2977 12.1383 18.9644 11.5146 18.4749 11.0251C17.9854 10.5356 17.3617 10.2023 16.6828 10.0673C16.0039 9.9322 15.3002 10.0015 14.6606 10.2664C14.0211 10.5313 13.4744 10.9799 13.0899 11.5555C12.7053 12.1311 12.5 12.8078 12.5 13.5"
                              stroke="#D4D4D4" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                        <rect height="30.5" rx="15.25" stroke="#D4D4D4"
                              strokeWidth="1.5" width="30.5" x="0.75"
                              y="0.75"/>
                     </svg>
                     <Text color="300" component="p" variant="label">
                        {item.challenge}
                     </Text>
                  </div>
                  <div className={s.qaItem}>
                     <svg fill="none" height="32" viewBox="0 0 32 32"
                          width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 13L14.1625 20L10.5 16.5" stroke="#fb8500" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="1.5"/>
                        <rect height="30.5" rx="15.25" stroke="#fb8500"
                              strokeWidth="1.5" width="30.5" x="0.75"
                              y="0.75"/>
                     </svg>
                     <Text color="white" component="p" variant="label">
                        {item.solution}
                     </Text>
                  </div>
               </div>
            ))}

         </div>
      </div>
   )
}
