import { Plugin } from 'obsidian'
import Database from 'better-sqlite3'
import { SqliteError } from 'better-sqlite3'

export default class SqliteDatabase extends Plugin {
  initDatabase: (sqlitePath: string, options?: Database.Options) => any
  SqliteError: SqliteError
  async onload(): Promise<void> {
    console.log('loading obsidian-sqlite3 plugin...')

    this.initDatabase = this.databaseWrapper
    this.SqliteError = SqliteError
  }
  
  private databaseWrapper(sqlitePath: string, options?: Database.Options) {
    return new Database(sqlitePath, options)
  }

  async onunload(): Promise<void> {
    console.log('unloading obsidain-sqlite3 plugin')
  }
}
