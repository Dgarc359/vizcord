import { DataSource } from "typeorm"

export const mangaDatasource = new DataSource({
  type: 'better-sqlite3',
  database: 'manga.db',
  synchronize: true,
});

mangaDatasource.initialize()
  .then(() => 
    console.log('db init\'d')
  )
  .catch((err) =>
    console.error(err)
  )