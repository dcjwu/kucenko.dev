import React from "react"

import Aos from "aos"
import { getCookie } from "cookies-next"
import dynamic from "next/dynamic"

import { BlockWork } from "@components/BlockWork/BlockWork"
import { Footer } from "@components/Footer/Footer"
import { ShowArrowUpWrapper } from "@components/ShowArrowUpWrapper/ShowArrowUpWrapper"
import { WelcomeScreenWrapper } from "@components/WelcomeScreenWrapper/WelcomeScreenWrapper"
import { dbCapabilities } from "@db/capabilities"
import { dbContact } from "@db/contact"
import { dbJourney } from "@db/journey"
import { dbProjects } from "@db/projects"
import { dbStack } from "@db/stack"
import { dbTeam } from "@db/team"
import { dbWork } from "@db/work"
import { Section } from "@lib/Section/Section"
import { aosParams } from "@service/aos/aosParams"

import type { NextPage } from "next"

const CookiesConsent = dynamic(() => import("@components/CookiesConsent/CookiesConsent").then(module => module.CookiesConsent))

const BlockCapabilities = dynamic(() => import("@components/BlockCapabilities/BlockCapabilities").then(module => module.BlockCapabilities))
const BlockProjects = dynamic(() => import("@components/BlockProjects/BlockProjects").then(module => module.BlockProjects))
const BlockJourney = dynamic(() => import("@components/BlockJourney/BlockJourney").then(module => module.BlockJourney))
const BlockStack = dynamic(() => import("@components/BlockStack/BlockStack").then(module => module.BlockStack))
const BlockTeam = dynamic(() => import("@components/BlockTeam/BlockTeam").then(module => module.BlockTeam))
const BlockContact = dynamic(() => import("@components/BlockContact/BlockContact").then(module => module.BlockContact))

const Home: NextPage = () => {

   const [showConsent, setShowConsent] = React.useState<boolean>(false)

   //TODO: Add onBlur={handleMouseLeave} onFocus={(): void => handleMouseEnter(item)} to element which use designHook

   React.useEffect(() => {
      Aos.init(aosParams)

      const isCookie = getCookie("web3app-root")

      if (!isCookie || isCookie === "reject") {
         setShowConsent(true)
      }
   }, [])

   // React.useEffect(() => {
   //    if (typeof window !== "undefined") {
   //       if (window.performance && performance.navigation.type == 1) {
   //          router.replace("/", "#", { shallow: true })
   //       } else {
   //          alert("This page is not reloaded")
   //       }
   //    }
   // }, []) //TODO: Fix page refresh!

   return (
      <>

         {showConsent && <CookiesConsent consentSetter={setShowConsent}/>}

         <WelcomeScreenWrapper/>

         <Section bg="white"
                  id="work"
                  subtitle="Choose a category to see how we can help you"
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

            <Section bg="white" id="stack"
                     title={dbStack.page.header}>
               <BlockStack/>
            </Section>

            <Section bg="black" id="team"
                     title={dbTeam.page.header}>
               <BlockTeam/>
            </Section>

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
