import { join, resolve } from 'path'
import { readdirSync } from 'fs'
const camelcase = require('camelcase')

import { imageExtensions } from './types'
import { spawn } from 'child_process'

export const fromRoot = (relative: string) => resolve(__dirname, '..', relative)

// @ts-ignore
export const spawnAsync = (command: string, args, options = {}, spawner = spawn) =>
  new Promise((resolve) => {
    const proc = spawner(command, [].concat(args).filter(Boolean), {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: process.env,
      ...options,
    })

    proc.on('exit', resolve)
  })

export const getImageList = (): string[] => {
  const files: string[] = readdirSync(join(process.cwd()))
  return files.filter((file) => {
    let isImage = false
    imageExtensions.forEach((ext) => (file.includes(ext) ? (isImage = isImage || true) : null))
    return isImage
  })
}

export const getImageName = (image: string) => camelcase(image.slice(0, image.indexOf('.')))

export const getImportStatement = (image: string): string => {
  return `import ${getImageName(image)} from './${image}'`
}

export const generateImports = (images: string[]) => {
  return images.map((image) => getImportStatement(image)).join('\n')
}

export const generateObject = (images: string[]) => {
  return `export const images = {\n${images.map((image) => getImageName(image)).join(',\n')}\n}`
}
