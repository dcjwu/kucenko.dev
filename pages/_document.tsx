import React from "react"

import NextDocument, { Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
   render(): JSX.Element {
      return (
         <Html lang="en">

            <Head>
               <link href="https://fonts.googleapis.com" rel="preconnect"/>
               <link href="https://fonts.gstatic.com" rel="preconnect"/>
               <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap"
                     rel="stylesheet"/>
               <meta content="Fast and predictable web development and attentive mentorship."
                  name="description"/>

               <meta content="kucenko.dev | Developer and Mentor" property="og:title"/>
               <meta content="Fast and predictable web development and attentive mentorship."
                     property="og:description"/>
               <meta content="https://kucenko.dev/logo.png" property="og:image"/>
               <meta content="https://kucenko.dev" property="og:url"/>

               <meta content="kucenko.dev | Developer and Mentor" name="twitter:title"/>
               <meta content="Fast and predictable web development and attentive mentorship."
                     name="twitter:description"/>
               <meta content="https://kucenko.dev/logo.png" name="twitter:url"/>
            </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}
