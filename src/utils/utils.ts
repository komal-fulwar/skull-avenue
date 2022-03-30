export const getIdFromName = (nftName: string) => {
    const id = nftName.split("-")[1].split("#")[1]
    return id
}

export const trimString = (name: string) => {
    const allAttValue =  name
    return allAttValue
}

export const getRarityNumber = (rarityPer: string) => {
    const rare = rarityPer.split("-")[1]
    return rare
}