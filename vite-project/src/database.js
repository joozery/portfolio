import initSqlJs from 'sql.js';

export async function createDatabase() {
  const SQL = await initSqlJs({
    locateFile: (file) => `/sql-wasm.wasm`,
  });

  const db = new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT
    )
  `);

  return db;
}
