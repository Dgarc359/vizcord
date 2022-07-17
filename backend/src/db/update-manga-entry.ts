import { PrismaClient } from "@prisma/client";


export const updateMangaEntry = async (prismaClient: PrismaClient, manga: string, daysToNextChapt: number, hoursToNextChapt?: number) => {
  return await prismaClient.manga.update({
    where: {
      manga: manga,
    },
    data: {
      // manga: manga,
      daysToNextChapt: daysToNextChapt,
      hoursToNextChapt: hoursToNextChapt ? hoursToNextChapt : 0
    }
  })
}
