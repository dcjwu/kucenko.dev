export enum ActiveItemEnum {
   Analysis = "Analysis",
   Research = "Research & Design",
   Dev = "Development",
   Release = "Release",
}

export type BlockJourneyItemType = {
   isActive: boolean
   number: number
   header: ActiveItemEnum
   handleActivateItem: (item: ActiveItemEnum) => void
}
