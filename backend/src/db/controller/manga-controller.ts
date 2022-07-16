import { Manga } from "../entities/manga";
import { mangaDatasource } from "../datasources";

export class MangaController {
  getAll() {
    return mangaDatasource.manager.find(Manga);
  }
}