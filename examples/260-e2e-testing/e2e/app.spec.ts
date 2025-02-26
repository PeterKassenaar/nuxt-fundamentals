import {describe, it, expect} from "vitest";
import {setup, $fetch, createPage, url} from "@nuxt/test-utils/e2e";

describe('Complete App, e2e', async () => {
    await setup() // await the setting up of the complete nuxt application

    // Option 1: using Vitest
    it.skip('1. contains text as a string (Vitest)', async () => {
        const html = await $fetch('/');// fetch the page, from e2e test-utils(!). NOT the default Nuxt/Vue $fetch()
        expect(html).contains('Random number generator')
    });

    // This way, we can't really interact with the html for example for testing clicking
    // a button, so we need a browser. Enter Playwright!

    // Option 2: with playwright
    it('2. Test in browser, with playwright', async () => {
        // 1. create the page (imported from test-utils/e2e)
        const page = await createPage();
        // 2. go to the root, wait until page is fully hydrated
        await page.goto(url('/'), {
            waitUntil: 'hydration'
        });
        // 3. get the generated number from the page. It lives inside an <h3>,
        // therefore we use that selector.
        const text = await page.textContent('h3');
        // 4. casting
        const number = Number(text);
        // 5. expectation
        expect(number).toBeGreaterThan(0);

        // 6. Let's interact with the page.
        // We now expect a new number, which is different from the previous number
        await page.click('button');
        const newText = await page.textContent('h3');
        const newNumber = Number(newText);
        expect(number).toBe(newNumber);
    })
})
