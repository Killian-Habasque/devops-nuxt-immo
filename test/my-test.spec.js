import { describe, test, expect } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils/e2e'

describe('Mon test', async () => {
  await setup({
    browser: true,
    browserOptions: {
      type: 'chromium' 
    }
  })

  test('mon test', async () => {
    const testPage = await createPage('/contact')
    const formExists = await testPage.$eval('form', form => !!form);

    expect(formExists).toBe(true);

  })
})
