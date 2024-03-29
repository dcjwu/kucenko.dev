import React from "react"

import s from "./BackgroundStars.module.scss"

export const BackgroundStars: React.FC = (): JSX.Element => {
   return (
      <video autoPlay disablePictureInPicture
             loop muted
             playsInline
             className={s.fallingStars}>
         <source src="fallingstars.mp4" type="video/mp4"/>
      </video>
   )
}