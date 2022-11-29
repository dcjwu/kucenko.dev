import React from "react"

import Aos from "aos"
import { getCookie } from "cookies-next"
import dynamic from "next/dynamic"
import Script from "next/script"

import { BlockWork } from "@components/BlockWork/BlockWork"
import { Footer } from "@components/Footer/Footer"
import { ShowArrowUpWrapper } from "@components/ShowArrowUpWrapper/ShowArrowUpWrapper"
import { WelcomeScreenWrapper } from "@components/WelcomeScreenWrapper/WelcomeScreenWrapper"
import { dbCapabilities } from "@db/capabilities"
import { dbContact } from "@db/contact"
import { dbJourney } from "@db/journey"
import { dbProjects } from "@db/projects"
import { dbWork } from "@db/work"
import { Section } from "@lib/Section/Section"
import { aosParams } from "@service/aos/aosParams"

import type { NextPage } from "next"

const CookiesConsent = dynamic(() => import("@components/CookiesConsent/CookiesConsent").then(module => module.CookiesConsent))

const BlockCapabilities = dynamic(() => import("@components/BlockCapabilities/BlockCapabilities").then(module => module.BlockCapabilities))
const BlockProjects = dynamic(() => import("@components/BlockProjects/BlockProjects").then(module => module.BlockProjects))
const BlockJourney = dynamic(() => import("@components/BlockJourney/BlockJourney").then(module => module.BlockJourney))
const BlockContact = dynamic(() => import("@components/BlockContact/BlockContact").then(module => module.BlockContact))

const Home: NextPage = () => {

   const [showConsent, setShowConsent] = React.useState<boolean>(false)

   React.useEffect(() => {
      Aos.init(aosParams)

      const isCookie = getCookie("kucenko-root")

      if (!isCookie || isCookie === "reject") {
         setShowConsent(true)
      }
   }, [])

   return (
      <>

         <Script src="https://www.googletagmanager.com/gtag/js?id=G-GSY5KCSQE1"
                 strategy="lazyOnload"/>

         <Script id="script" strategy="lazyOnload">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                     gtag('config', 'G-GSY5KCSQE1');
                `}
         </Script>

         {showConsent && <CookiesConsent consentSetter={setShowConsent}/>}

         <WelcomeScreenWrapper/>

         <Section bg="white"
                  id="work"
                  subtitle="Choose a category to see how I can help you"
                  title={dbWork.page.header}>
            <BlockWork/>
         </Section>


         <Section bg="black" id="capabilities"
                  title={dbCapabilities.page.header}>
            <BlockCapabilities/>
         </Section>

         <Section bg="white"
                  id="projects"
                  title={dbProjects.page.header}>
            <BlockProjects/>
         </Section>

         <ShowArrowUpWrapper>

            <Section bg="black" id="journey"
                     title={dbJourney.page.header}>
               <BlockJourney/>
            </Section>

            {/*<Section bg="white" id="stack"*/}
            {/*         title={dbStack.page.header}>*/}
            {/*   <BlockStack/>*/}
            {/*</Section>*/}

            {/*<Section bg="black" id="team"*/}
            {/*         title={dbTeam.page.header}>*/}
            {/*   <BlockTeam/>*/}
            {/*</Section>*/}

            <Section bg="white" id="contact"
                     title={dbContact.page.header}>
               <BlockContact/>
            </Section>

            <Footer/>

         </ShowArrowUpWrapper>

      </>
   )
}

export default Home
