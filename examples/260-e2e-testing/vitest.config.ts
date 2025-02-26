// vitest.config.ts
import {defineVitestConfig} from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        reporters: 'verbose',
        testTimeout: 10000, // allow 10 seconds for all tests - for slower machines
    }
    // other custom configuration required...
})
