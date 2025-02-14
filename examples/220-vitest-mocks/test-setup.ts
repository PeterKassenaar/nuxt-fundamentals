// test-setup.ts
import { config } from '@vue/test-utils';

// Define global stubs for all tests
config.global.stubs = {
    PostCard: true, // Stub PostCard globally
};
