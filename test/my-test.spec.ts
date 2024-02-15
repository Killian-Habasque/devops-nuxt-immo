import { describe, test } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils/e2e'

describe('My test', async () => {
  await setup({
    browser: true, // Activer le navigateur pour les tests de bout en bout
    browserOptions: {
      type: 'chromium' // Vous pouvez également utiliser 'firefox' ou 'webkit'
    }
  })

  test('my test', async () => {
    
    const page = await createPage('/') // Créer une instance de navigateur Playwright
    // await page.goto('http://localhost:3000/') // Naviguer vers l'URL de votre application Nuxt
    const test = await createPage('/test')
    await test.getByRole('link', { name: 'test' }).click();
    // Écrire vos assertions ou interactions avec la page ici
  })
})
