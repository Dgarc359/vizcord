import { PrismaClient } from "@prisma/client";

export const readAllMangaTitles = async (prismaClient: PrismaClient) => {
  return await prismaClient.manga.findMany()
}
