import {mount} from '@vue/test-utils';
import {describe, it, beforeEach, afterEach, expect, vi} from 'vitest';
import PostComponent from './index.vue'; // Adjust the path if needed
import type {Post} from "@/types/Post";

// Define a type for your test environment's component instance
type PostComponentInstance = {
    posts: Ref<Post[]>;
    isLoading: Ref<boolean>;
    error: Ref<string | null>;
};

// Mock data for testing
const mockPosts = [
    {id: 1, title: 'Post 1', body: 'Content of Post 1'},
    {id: 2, title: 'Post 2', body: 'Content of Post 2'},
];

describe('PostComponent', () => {
    beforeEach(() => {
        // Mock the global `fetch` function before each test
        global.fetch = vi.fn();
    });

    afterEach(() => {
        // Restore original implementations after each test
        vi.restoreAllMocks();
    });

    it('PostComponent should exist', () => {
        expect(PostComponent).toBeTruthy();
    });

    it('mockPosts should be assigned to local posts', async () => {
        // const wrapper = mount<PostComponentInstance>(PostComponent); // Add instance type
        // This works, but leaves a Vitest warning: [Vue warn]: Failed to resolve component: PostCard
        //*****************************************
        // SOLUTION 1: Mock out PostCard:
        const wrapper = mount<PostComponentInstance>(PostComponent, {
            global: {
                stubs: {
                    PostCard: true, // Mock <PostCard> with an empty stub
                },
            },
        });
        // SOLUTION 2: actually importing PostCard
        // const wrapper = mount<PostComponentInstance>(PostComponent, {
        //     global: {
        //         components: {
        //             PostCard, // Register <PostCard> in test environment
        //         },
        //     },
        // });
        // SOLUTION 3: ignore DOM Rendering
        // const wrapper=mount<PostComponentInstance>
        // (PostComponent, {
        //    shallow: true, // completely stub out all child components
        // });


        wrapper.vm.posts = mockPosts; // Access posts with proper typing

        await wrapper.vm.$nextTick(); // Wait for the reactive update

        expect(wrapper.vm.posts.length).toBe(2); // Check the length
        expect(wrapper.vm.posts).toEqual(mockPosts); // Assert equality
    });
});
