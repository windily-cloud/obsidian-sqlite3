import { Plugin } from 'obsidian'
import Database from 'better-sqlite3'
import type { Database as DBtype } from 'better-sqlite3'
import { SqliteError } from 'better-sqlite3'
import path from 'path'

export default class SqliteDatabase extends Plugin {
  initDatabase: (sqlitePath: string, options?: Database.Options) => DBtype
  SqliteError: SqliteError
  async onload(): Promise<void> {
    console.log('loading obsidian-sqlite3 plugin...')

    this.initDatabase = this.databaseWrapper
    this.SqliteError = SqliteError
  }

  getDetaultDb(): DBtype {
    //@ts-ignore
    const defaultDbPath = path.resolve(app.vault.adapter.basePath, app.vault.configDir, "obsidian.db")
    return new Database(defaultDbPath, { verbose: console.log })
  }

  closeDefaultDb(): void {
    const db = this.getDetaultDb()
    db.close()
  }

  private databaseWrapper(sqlitePath: string, options?: Database.Options) {
    return new Database(sqlitePath, options)
  }

  async onunload(): Promise<void> {
    this.closeDefaultDb()
    console.log('unloading obsidain-sqlite3 plugin')
  }
}
