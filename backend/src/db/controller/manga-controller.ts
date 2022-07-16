import { Manga } from "../entities/manga.model";
import { mangaDatasource } from "../datasources";

export class MangaController {
  getAll() {
    return mangaDatasource.manager.find(Manga);
  }
}