import { requestCSM } from "./external"
import { parseHtml } from "./html-parsing";
import { parseStringForDaysTillChapter } from "./utils";

export const main = async () => {
  console.log('starting main backend server');
  const csm = await requestCSM();

  if (!csm) return;

  const parse = await parseHtml(csm);
  
  if (!parse) return;

  const daysTillRelease = parseStringForDaysTillChapter(parse);
}

main();