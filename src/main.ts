import { Plugin } from 'obsidian'
import Database from 'better-sqlite3'


export default class SamplePlugin extends Plugin {
  async onload(): Promise<void> {
    console.log('loading sample plugin...')
    const defaultDbPath = "D:/Temp/Temp/obsidian.db"
    const db = new Database(defaultDbPath, { verbose: console.log })
    console.log("hello", db)
  }

  // // async loadSettings() {
  // //   this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  // // }

  // // async saveSettings() {
  // //   await this.saveData(this.settings);
  // // }

  // // async activeView() {
  // //   const workspace = this.app.workspace
  // //   workspace.detachLeavesOfType(SAMPLE_VIEW_TYPE)
  // //   await workspace.getLeaf(false).setViewState({ type: SAMPLE_VIEW_TYPE })
  // //   workspace.revealLeaf(workspace.getLeavesOfType(SAMPLE_VIEW_TYPE)[0])
  // // }

  async onunload(): Promise<void> {
    console.log('unloading plugin')
  }
  //   this.app.workspace.detachLeavesOfType(SAMPLE_VIEW_TYPE)
}