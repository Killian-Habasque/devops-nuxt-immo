import { describe, test } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils/e2e'

describe('My test', async () => {
  await setup({
    browser: true,
    browserOptions: {
      type: 'chromium' 
    }
  })

  test('my test', async () => {
    const page = await createPage('/') 
  
    const test = await createPage('/annonce')
    await test.getByRole('link', { name: 'home' }).click();

  })
})