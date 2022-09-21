# OBSIDIAN-SQLITE3

Use better-sqlite3 to give obisidian the ability to manipulate sqlite3 databases.

# Intention

Currently the linkage between obsidian and zotero requires the use of zotero's Better BibTeX for Zotero plugin, which is a inelegant way. Wouldn't it be nice if I could access zotero's database directly?

At the same time, obsidian has all the data in the md file, which is perfect. But I would like to link with other software like zotero, sioyek, notion, etc. that use sqlite3 as data storage. Through the api exposed by this plugin, other developers can easily call other software's database. In fact, I would like obsidian to integrate this feature to give ob more ways to store data, so as not to pollute the md file at the same time, bringing more possibilities. The work I did was trivial, just exposing two functions of better-sqlite3.

# Install

## From Obsidian

1. Open Settings > Third-party plugin
2. Make sure Safe mode is off
3. Click Browse community plugins
4. Search for this plugin
5. Click Install
6. Once installed, enable the plugin and close the community plugins window.
7. Go to [plugin assets page](https://github.com/windily-cloud/obsidian-sqlite3/tree/master/assets), download the corresponding better_sqlite3.node file.
8. Copy better-sqlite3 file to the path ".obsidian/".

Tips:

- For Mac: 103-darwin-arm64.zip
- For Linux: 103-linux-x64.zip
- For windows: 103-win32-x64

If you need another compiled version, please download it from the [better-sqlite3 repo](https://github.com/WiseLibs/better-sqlite3/releases/tag/v7.6.2)

## From GitHub

1. Download the Latest Release from the Releases section of the GitHub Repository
2. Put files to your vault's plugins folder: <vault>/.obsidian/plugins/media-extended
3. Reload Obsidian
4. If prompted about Safe Mode, you can disable safe mode and enable the plugin. Otherwise, head to Settings, third-party plugins, make sure safe mode is off and enable the plugin from there.

