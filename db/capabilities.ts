import blockchain from "@assets/images/capabilities/blockchain.svg"
import uxui from "@assets/images/capabilities/uxui.svg"
import webmobile from "@assets/images/capabilities/webmobile.svg"

export const dbCapabilities = {
   page: { header: "Services" },
   content: {
      data: [
         {
            header: "Web Development",
            subheader: "Web development services range from handling complex business logic to solving uncommon" +
               " front-end challenges, and are designed for companies of any size and industry.",
            image: webmobile
         },
         {
            header: "Mentorship",
            subheader: "I will provide you with educational plan which consists of modern and easy to use" +
               " technologies, I will guide you through and support until you get a desired result. Moreover, you" +
               " will have an opportunity to get real-world practice.",
            image: blockchain
         },
         {
            header: "UX/UI Design",
            subheader: "Me with my UX/UI designer strive to create efficient, functional and intuitive user" +
               " experience" +
               " that" +
               " helps users connect with business’ brand identity.",
            image: uxui
         },
         // {
         //    header: "Software Testing & QA",
         //    subheader: "Our testing and development processes are fused into single activity, and are based on the Agile methodology. During the testing process we detect bugs, performance issues and other details that hinder enjoyment of the final product.",
         //    image: testing
         // },
         // {
         //    header: "Consulting",
         //    subheader: "With our assistance, you will be able to expand your knowledge of latest web technologies and identify the weaknesses of your current strategy, thus providing you with an efficient solution for your business.",
         //    image: consulting
         // }
      ]
   }
}
