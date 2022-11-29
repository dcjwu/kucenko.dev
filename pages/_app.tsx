import React from "react"

import Head from "next/head"
import { RecoilRoot } from "recoil"

import type { AppProps } from "next/app"

import "@assets/styles/root.scss"

const MyApp = ({
   Component,
   pageProps
}: AppProps): JSX.Element => {

   return (
      <>
         <Head>
            <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
                  name="viewport"/>
            <title>kucenko.dev | Developer and Mentor</title>
         </Head>

         <RecoilRoot>
            <Component {...pageProps} />
         </RecoilRoot>
      </>
   )
}

export default MyApp
