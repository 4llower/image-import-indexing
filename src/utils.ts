import { join, resolve } from 'path'
import { readdirSync } from 'fs'

import { imageExtensions } from './types'

export const fromRoot = (relative: string) => resolve(__dirname, '..', relative)

export const getImageList = (): string[] => {
  const files: string[] = readdirSync(join(__dirname))
  return files.filter((file) => {
    let isImage = false
    imageExtensions.forEach((ext) => (file.includes(ext) ? (isImage = isImage || true) : null))
    return isImage
  })
}
