import { requestCSM } from "./external"
import { parseHtml } from "./html-parsing";
import { parseStringForDaysTillChapter } from "./utils";
import { createMangaEntry } from "./db";
import { PrismaClient } from "@prisma/client";
import { updateMangaEntry } from "./db/update-manga-entry";
import { upsertMangaEntry } from "./db/upsert-manga-entry";
import { updateDaysTillChapt } from "./cron/update-days-till-chapt.cron";

const prismaClient = new PrismaClient();

export const main = async () => {
  console.log('starting main backend server');
  

  const csm = await requestCSM();
  // console.log(csm);

  if (!csm) return;

  const parse = await parseHtml(csm);
  
  if (!parse) return;

  const daysTillRelease = parseStringForDaysTillChapter(parse);
  if (!daysTillRelease) return;

  const updateChaptsTask = await updateDaysTillChapt(prismaClient);
  updateChaptsTask.start();
  // console.log(daysTillRelease[0])
  // console.log('blah')

  // createMangaEntry('chainsaw man', Number(daysTillRelease[0]));
  // await upsertMangaEntry(prismaClient, 'chainsaw man', Number(daysTillRelease[0]))
  // await upsertMangaEntry(prisma, 'one piece', Number(daysTillRelease[0]))
  // await upsertMangaEntry(prisma, 'Black Clover', Number(daysTillRelease[0]))
}

main();