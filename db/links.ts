import { dbCapabilities } from "@db/capabilities"
import { dbJourney } from "@db/journey"

export const dbLinks = [
   { link: dbCapabilities.page.header, id: "capabilities" },
   { link: "Latest projects", id: "projects" },
   { link: dbJourney.page.header, id: "journey" },
   // { link: dbStack.page.header, id: "stack" },
   // { link: "Team", id: "team" },
   { link: "Contact", id: "contact" },
]
