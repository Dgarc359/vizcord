import { DataSource } from "typeorm"
import path from 'path'

export const mangaDatasource = new DataSource({
  type: 'better-sqlite3',
  database: './manga.db',
  synchronize: true,
  entities: [`**/entities/**/*.model.{ts,js}`]
});

mangaDatasource.initialize()
  .then(() => 
    console.log('db init\'d')
  )
  .catch((err) =>
    console.error(err)
  )