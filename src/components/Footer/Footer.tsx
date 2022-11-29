import React from "react"

import { FooterContacts } from "@components/Footer/FooterContacts"
import { FooterNavigation } from "@components/Footer/FooterNavigation"

import s from "./Footer.module.scss"

export const Footer: React.FC = (): JSX.Element => {

   return (
      <footer className={s.wrapper}>
         <div className={s.footer}>
            {/*<div className={s.left}>*/}
            {/*   <Text isBold color="white" component="p"*/}
            {/*         style={{ marginBottom: "1.6rem" }} variant="paragraph-lg">*/}
            {/*      <span style={{ color: colorBrand }}>A</span>wards and <span style={{ color: colorBrand }}>R</span>eviews*/}
            {/*   </Text>*/}
            {/*   <div className={s.images}>*/}
            {/*      <Image alt="Clutch Top Developers - Eastern Europe 2021" height={95} quality={100}*/}
            {/*             src={clutch1}*/}
            {/*             width={88.48}/>*/}
            {/*      <Image alt="Clutch Top IT Services - Latvia 2021" height={95} quality={100}*/}
            {/*             src={clutch2}*/}
            {/*             width={88.48}/>*/}
            {/*      <Image alt="Clutch Top B2B Companies - Global 2021" height={95} quality={100}*/}
            {/*             src={clutch3}*/}
            {/*             width={110.67}/>*/}
            {/*   </div>*/}

            {/*   <div className="clutch-widget" data-clutchcompany-id="1925623" data-expandifr="true"*/}
            {/*        data-height="65" data-nofollow="true" data-scale="100"*/}
            {/*        data-url="https://widget.clutch.co/" data-widget-type="7"/>*/}

            {/*</div>*/}
            <div className={s.right}>

               <FooterNavigation/>

               <FooterContacts/>

               {/*<div>*/}
               {/*   <Text isBold color="white" component="p"*/}
               {/*         style={{ marginBottom: "1.6rem" }}*/}
               {/*         variant="paragraph-lg">*/}
               {/*      <span style={{ color: colorBrand }}>C</span>ompany Info*/}
               {/*   </Text>*/}
               {/*   <Text color="white" component="p" variant="paragraph">*/}
               {/*      SIA &quot;Web3App&quot;*/}
               {/*   </Text>*/}
               {/*   <Text color="white" component="p" variant="paragraph">*/}
               {/*      Reg Nr: 40103784712*/}
               {/*   </Text>*/}
               {/*   <Text color="white" component="p" variant="paragraph">*/}
               {/*      Riga, Latvia*/}
               {/*   </Text>*/}
               {/*</div>*/}

            </div>
         </div>
      </footer>
   )
}
