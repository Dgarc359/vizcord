import sqlite from 'sqlite3';
import path from 'path';

export const createSqliteDb = () => {
  const db = new sqlite.Database(
    path.join(__dirname, './manga.db'), 
    sqlite.OPEN_READWRITE, 
    (err) => console.error(err)
  );

  db.run('CREATE TABLE manga(manga, days_to_next_chapt)')

  db.close((err) => console.error(err));
}