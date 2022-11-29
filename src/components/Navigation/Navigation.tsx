import React from "react"

import classNames from "classnames/bind"

import { BurgerMenuButton } from "@components/Burger/BurgerMenuButton/BurgerMenuButton"
import { Button } from "@lib/Button/Button"

import type { NavigationType } from "@customTypes/components"


import s from "./Navigation.module.scss"


const cx = classNames.bind(s)

export const Navigation: React.FC<NavigationType> = ({ removeButton }): JSX.Element => {

   const classNamesNavigation = cx(s.navigation, { removeButton: removeButton })

   const handleGoToTop = (): void => {
      window.location.href = "#home"
   }

   return (
      <div className={classNamesNavigation}>

         <button aria-label="go-to-top" onClick={handleGoToTop}>
            <svg data-name="Layer 1" height="32"
                 id="Layer_1"
                 viewBox="0 0 352.07 363.91" width="32"
                 xmlns="http://www.w3.org/2000/svg">
               <path className="cls-1"
                     d="M414,68.05H86a12,12,0,0,0-12,12V420a12,12,0,0,0,12,12H414a12,12,0,0,0,12-12V80.05A12,12,0,0,0,414,68.05ZM287.11,383.69l-74.22-74.22-74.22,74.22H101.56V123.92h74.22V235.25L287.11,123.92h55.66v55.66L268.55,253.8,398.44,383.69Z"
                     fill="#fff"
                     transform="translate(-73.96 -68.05)"/>
            </svg>

         </button>

         <BurgerMenuButton/>

         <form action="https://calendly.com/aleksejs-kucenko/15-min" rel="noreferrer" target="_blank">
            <Button ariaLabel="book-a-call" variant="unique">
               Let&apos;s discuss your desires
            </Button>
         </form>
      </div>
   )
}
