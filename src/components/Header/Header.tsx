import React from "react"

import { colorBrand } from "@constants/styles"
import { Arrow } from "@lib/Arrow/Arrow"
import { BackgroundStars } from "@lib/BackgroundStars/BackgroundStars"
import { Heading } from "@lib/Heading/Heading"
import { Text } from "@lib/Text/Text"

import s from "./Header.module.scss"

export const Header = React.forwardRef<HTMLDivElement>((props, ref) => {

   const handleScrollDown = (): void => {
      window.location.href = "#work"
   }

   return (
      <header ref={ref} className={s.wrapper} id="home">
         <BackgroundStars/>
         <div className={s.header}>
            <div className={s.title}>
               <Heading color="white" component="h1" style={{ marginBottom: "1.6rem" }}
                        variant="display">
                  kucenko<span style={{ color: colorBrand }}>.dev</span>
               </Heading>
               <Text color="white" component="h2" variant="paragraph-lg">
                  <span style={{ color: colorBrand }}>Your</span> technical <span style={{ color: colorBrand }}>friend</span> is here
               </Text>
            </div>
            <Arrow noDifference ariaLabel="move-to-next-block" direction="down"
                   variant="brand"
                   onClick={handleScrollDown}/>
         </div>
      </header>
   )
})

Header.displayName = "Header"
