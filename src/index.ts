import { Command, flags } from '@oclif/command'

import { appendFileSync } from 'fs'

import { generateImports, generateObject, getImageList, spawnAsync } from './utils'

class ImageImportIndexing extends Command {
  static description = 'describe the command here'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    name: flags.string({
      char: 'n',
      description: 'File which need to import images {default as index.ts}',
    }),
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { flags } = this.parse(ImageImportIndexing)
    const images = getImageList()
    const fileToSave = flags.name ?? 'index.ts'
    appendFileSync(fileToSave, `${generateImports(images)}\n${generateObject(images)}`)
  }
}

export = ImageImportIndexing
