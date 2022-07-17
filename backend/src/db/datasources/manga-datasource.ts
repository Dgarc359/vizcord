import { DataSource } from "typeorm"
import { Manga } from "../entities/manga.model";
import { createMangaTable1658027388504 } from "../migration/1658027388504-create-manga-table";

export const mangaDatasource = new DataSource({
  type: 'better-sqlite3',
  database: 'vizcord.sqlite',
  // synchronize: true,
  logging: true,
  entities: [Manga],
  migrations: [createMangaTable1658027388504],
});


export const initDb = () => {
  mangaDatasource.initialize()
    .then(() => 
      console.log('db init\'d')
    )
    .catch((err) =>
      console.error(err)
    )
}
