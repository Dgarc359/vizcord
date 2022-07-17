import { PrismaClient } from "@prisma/client";

export const upsertMangaEntry = async (prismaClient: PrismaClient, manga: string, daysToNextChapt: number, hoursToNextChapt?: number) => {
  return await prismaClient.manga.upsert({
    where: {
      manga: manga,
    },
    create: {
      manga: manga,
      daysToNextChapt: daysToNextChapt,
      hoursToNextChapt: hoursToNextChapt ? hoursToNextChapt : 0
    },
    update: {
      daysToNextChapt: daysToNextChapt,
      hoursToNextChapt: hoursToNextChapt ? hoursToNextChapt : 0
    }
  })
}