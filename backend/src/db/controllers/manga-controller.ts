import { Manga } from "../entities/manga";
import { mangaDatasource } from "../datasource";

export class MangaController {
  @Get("/manga")
  getAll() {
    return mangaDatasource.manager.find(Manga);
  }
}