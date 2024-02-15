import { describe, test } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils/e2e'

const PAGES = {
  contact: '/contact',
}

describe('Tests des différentes pages', async () => {
  await setup({
    rootDir: '..',
    configFile: '../nuxt.config.js',
    server: true,
    port: 3000,
    build: true,
    browser: true
  })

  test('La page de contact devrait renvoyer une réponse 200', async () => {
    const page = await createPage(PAGES.contact)
  })

})
