# OBSIDIAN-SQLITE3

Use better-sqlite3 to give obisidian the ability to manipulate sqlite3 databases.

# Intention

Currently the linkage between obsidian and zotero requires the use of zotero's Better BibTeX for Zotero plugin, which is a inelegant way. Wouldn't it be nice if I could access zotero's database directly?

At the same time, obsidian has all the data in the md file, which is perfect. But I would like to link with other software like zotero, sioyek, notion, sticky note etc. that use sqlite3 as data storage. Through the api exposed by this plugin, other developers can easily call other software's database. In fact, I would like obsidian to integrate this feature to give ob more ways to store data, so as not to pollute the md file at the same time, bringing more possibilities. The work I did was trivial, just exposing two functions of better-sqlite3.

**Why not integrate the better-sqlite3 library into a functional plugin?**

Because this library is not like other libaray, `npm install` and that's it. For developers, you need to install the `node gyp` build environment, python, MS2022, .net tools, and a bunch of unknown errors. In particular, the binding.js of better-sqlite3 should be modified when packaging. This can be a very annoying thing for windows development. I don't want to have to do it again, how nice for other developers to call it directly.

**So what is the use of this plugin?**

- Linking with other software that uses sqlite.
- Store some dirty persistent data, such as the hash of each note, pollute md generic syntax of other syntax, etc.
- Store things that are not easy to write in md, or don't want to write in md format, such as bookmarks, time tracker, etc.

# Usage

## Use default database

This plugin will create `obsidian.db` in the `.obsidian` directory by default, which is the default sqlite file. You can get an instance of this database through the api:

```js
//Get the instanse of default database
const db = app.plugins.getPlugin["obsidian-sqlite3"].getDefaultDb()

//Some operations on the database

//close database
db.close()

```
## Use other database

You can also create your own sqlite3 database file or get other software's sqlite3 file:

```js
const db = app.plugins.getPlugin["obsidian-sqlite3"].initDatabase("D:/temp/custom-db.db", { verbose: console.log })

db.close()
```

Then you can read the [better-sqlite3 api doc](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md), do anything you want.

# Install

## From Obsidian

1. Open Settings > Third-party plugin.
2. Make sure Safe mode is off.
3. Click Browse community plugins.
4. Search for this plugin.
5. Click Install.
6. Once installed, enable the plugin and close the community plugins window.
7. Go to [plugin assets page](https://github.com/windily-cloud/obsidian-sqlite3/tree/master/assets), download the corresponding better_sqlite3.node zip file and unzip this file.
8. Copy better-sqlite3.node file into the path ".obsidian/".

Tips:

- For Mac: 103-darwin-arm64.zip.
- For Linux: 103-linux-x64.zip.
- For windows: 103-win32-x64.zip.

If you need another compiled version, please download it from the [better-sqlite3 repo](https://github.com/WiseLibs/better-sqlite3/releases/tag/v7.6.2).

## From GitHub

1. Download the Latest Release from the Releases section of the GitHub Repository.
2. Put files to your vault's plugins folder: `.obsidian/plugins/obsidain-sqlite3`
3. Reload Obsidian.
4. If prompted about Safe Mode, you can disable safe mode and enable the plugin. Otherwise, head to Settings, third-party plugins, make sure safe mode is off and enable the plugin from there.
5. Go to [plugin assets page](https://github.com/windily-cloud/obsidian-sqlite3/tree/master/assets), download the corresponding better_sqlite3.node zip file and unzip this file.
8. Copy better-sqlite3.node file into the path ".obsidian/".

