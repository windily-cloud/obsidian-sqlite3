import { Plugin } from 'obsidian'
import Database from 'better-sqlite3'

export default class SqliteDatabase extends Plugin {
  SqliteDatabase: (sqlitePath: string, options: any) => any
  async onload(): Promise<void> {
    console.log('loading sample plugin...')

    this.SqliteDatabase = this.databaseWrapper
  }
  databaseWrapper(sqlitePath: string, options: any) {
    return new Database(sqlitePath, options)
  }

  async onunload(): Promise<void> {
    console.log('unloading plugin')
  }
}
