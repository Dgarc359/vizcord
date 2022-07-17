import { DataSource } from "typeorm"
import { Manga } from "../entities/manga.model";

export const mangaDatasource = new DataSource({
  type: 'better-sqlite3',
  database: 'vizcord.sqlite',
  synchronize: true,
  logging: true,
  entities: [Manga],
  migrations: ['../migrations/**/*.{ts/js}'],
});

mangaDatasource.initialize()
  .then(() => 
    console.log('db init\'d')
  )
  .catch((err) =>
    console.error(err)
  )