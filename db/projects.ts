import paronyanc from "@assets/images/projects/paronyanc.svg"
import qualkey from "@assets/images/projects/qualkey.svg"

export const dbProjects = {
   page: { header: "Latest projects" },
   content: {
      data: [
         {
            header: "Qualkey",
            subheader: [
               "Solidity",
               "NestJS",
               "NextJS",
               "AWS"
            ],
            description: "QualKey provides secure digital credentials so you can prove the authenticity of your" +
               " qualification.\nThrough QualKey, you can store evidence of your qualification on a personal device," +
               " and you control what, and with whom, information is shared. My task here was to fully develop" +
               " frontend" +
               " from scratch and from time to time assist a backend developer.",
            image: qualkey,
            color: "#0880CE",
            url: "https://www.app.qualkey.org/"
         },
         {
            header: "Karine Paronyanc",
            subheader: [
               "Strapi",
               "NextJS",
               "Heroku"
            ],
            description: "Fully developed Karine Paronyanc website. She is a wonderful artist with a" +
               " hundreds of" +
               " magnificent paintings.\nThis" +
               " website is a gallery where you can explore her work and dive into many different chapters of her" +
               " professional career and witness various painting styles.",
            image: paronyanc,
            color: "#FFFFFF",
            url: "https://karineparonyanc.com/"
         }
      ]
   }
}
