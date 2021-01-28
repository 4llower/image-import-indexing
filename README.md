image-import-indexing
=====================

CLI for creating index.ts which contains all images in folder as standart es6 import

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/image-import-indexing.svg)](https://npmjs.org/package/image-import-indexing)
[![Downloads/week](https://img.shields.io/npm/dw/image-import-indexing.svg)](https://npmjs.org/package/image-import-indexing)
[![License](https://img.shields.io/npm/l/image-import-indexing.svg)](https://github.com/4llower/image-import-indexing/blob/master/LICENSE)

<!-- toc -->
* [Pattern](#pattern)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
#Pattern
<!-- pattern -->
    ├── hello-world.png
    ├── svg-nine.svg                   
    ├── final-final-final.png                     
After use generate ```file.ts``` or ```index.ts``` (as default) which contain:
```
import helloWorld from './hello-world.png'
import svgNine from './svg-nine.svg'
import finalFinalFinal './final-final-final.png'

export const images = {
  helloWorld,
  svgNine,
  finalFinalFinal
}
```
ES6: ```import { images } from './folder'```
<!-- patternstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g image-import-indexing
$ img-i
running command...
$ img-i (-v|--version|version)
image-import-indexing/1.0.0 darwin-x64 node-v14.14.0
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
```sh-session
$ img-i --name file.ts // file will contain imports
$ img-i // default use as index.ts
...
```
<!-- commandsstop -->
