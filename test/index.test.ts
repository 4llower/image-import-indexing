import { expect, test } from '@oclif/test'

import cmd = require('../src')

describe('image-import-indexing', () => {
  test
    .stdout()
    .do(() => cmd.run([]))
    .it('runs', (ctx) => {
      expect(ctx.stdout).to.contain('')
    })
})
