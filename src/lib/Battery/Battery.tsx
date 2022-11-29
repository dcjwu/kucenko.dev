import React from "react"

import type { BatteryType } from "@customTypes/lib"

export const Battery: React.FC<BatteryType> = ({ variant }): JSX.Element => {
   return (
      <svg fill="none" height="32" viewBox="0 0 32 32"
           width="32" xmlns="http://www.w3.org/2000/svg">
         <path d="M31 12V20" stroke="#fb8500" strokeLinecap="round"
               strokeLinejoin="round" strokeWidth="1.5"/>
         <path d="M27 23V9C27 7.89543 26.1046 7 25 7L6 7C4.89543 7 4 7.89543 4 9V23C4 24.1046 4.89543 25 6 25H25C26.1046 25 27 24.1046 27 23Z"
            stroke="#fb8500" strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="1.5"/>

         {variant === "full" && <>
            <path d="M17.8008 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M13.1992 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M8.59961 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M22.4004 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
         </>}

         {variant === "half" && <>
            <path d="M17.8008 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M13.1992 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M8.59961 21V11" stroke="#fb8500" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="1.5"/>
         </>}

         {variant === "low" && <path d="M8.59961 21V11" stroke="#fb8500" strokeLinecap="round"
                                     strokeLinejoin="round" strokeWidth="1.5"/>}

      </svg>


   )
}

// <svg fill="none" height="32" viewBox="0 0 32 32"
//      width="32" xmlns="http://www.w3.org/2000/svg">
//    <path d="M31 12V20" stroke="#1CFEBA" stroke-linecap="round"
//          stroke-linejoin="round" stroke-width="1.5"/>
//    <path d="M27 23V9C27 7.89543 26.1046 7 25 7L6 7C4.89543 7 4 7.89543 4 9V23C4 24.1046 4.89543 25 6 25H25C26.1046 25 27 24.1046 27 23Z"
//       stroke="#1CFEBA" stroke-linecap="round"
//       stroke-linejoin="round" stroke-width="1.5"/>
//    <path d="M17.8008 21V11" stroke="#1CFEBA" stroke-linecap="round"
//          stroke-linejoin="round" stroke-width="1.5"/>
//    <path d="M13.1992 21V11" stroke="#1CFEBA" stroke-linecap="round"
//          stroke-linejoin="round" stroke-width="1.5"/>
//    <path d="M8.59961 21V11" stroke="#1CFEBA" stroke-linecap="round"
//          stroke-linejoin="round" stroke-width="1.5"/>
//    <path d="M22.4004 21V11" stroke="#1CFEBA" stroke-linecap="round"
//          stroke-linejoin="round" stroke-width="1.5"/>
// </svg>
