import { Manga } from "../entities/manga";
import { mangaDatasource } from "../datasource";

export class MangaController {
  getAll() {
    return mangaDatasource.manager.find(Manga);
  }
}