// vitest.config.ts
import {defineVitestConfig} from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt', // complete application is Nuxt. You can also set/overrule this on a per-page base if you want to.
    }
    // other custom configuration required...
})
