import { PrismaClient } from "@prisma/client";

export const createMangaEntry = async (prismaClient: PrismaClient, manga: string, daysTillRelease: number) => {
  return await prismaClient.manga.create({
    data: {
      manga: manga,
      daysToNextChapt: daysTillRelease,
      hoursToNextChapt: 0
    }
  })
}
