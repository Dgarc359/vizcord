import * as cheerio from "cheerio";

export const parseHtml = (html: string) => {
  const $ = cheerio.load(html);
  if (!$) return;

  const nextChapterDiv = cheerio.load($(".section_future_chapter").html()!)
  const nextChapterString = nextChapterDiv.text();
  console.log(nextChapterString);
}