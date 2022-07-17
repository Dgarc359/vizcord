import { readAllMangaTitles } from '../db/read-all-manga-titles';
import { PrismaClient } from '@prisma/client';
import { schedule } from 'node-cron';

export const updateDaysTillChapt = (prismaClient: PrismaClient) => {
  // return schedule('0 0 0 * * *', async () => { // should run at midnight
  return schedule('0 * * * * *', async () => {
    // pull manga in db to update

    const mangaTitles = await readAllMangaTitles(prismaClient);

    console.log('something with manga titles')
  })
}