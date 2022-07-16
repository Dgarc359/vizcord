import { requestCSM } from "./external"
import { parseHtml } from "./html-parsing";

export const main = async () => {
  console.log('starting main backend server');
  const csm = await requestCSM();

  if (!csm) return;

  const parse = parseHtml(csm);
}

main();