import {flushPromises, mount} from '@vue/test-utils';
import {describe, it, beforeEach, afterEach, expect, vi} from 'vitest';
import PostComponent from './index.vue'; // We're testing this particular component. Adjust the path if needed

// Mock data for testing
const mockPosts = [
    {id: 1, title: 'Post 1', body: 'Content of Post 1'},
    {id: 2, title: 'Post 2', body: 'Content of Post 2'},
];

describe('PostComponent', () => {
    // 1. Executed before each test
    beforeEach(() => {
        // Mock the global `fetch` function before each test
        global.fetch = vi.fn();
    });

    // 2. Executed after each test
    afterEach(() => {
        // Restore original implementations after each test
        vi.restoreAllMocks();
    });

    // 3. It-blocks: the actual tests
    it('PostComponent should exist', () => {
        expect(PostComponent).toBeTruthy();
    });

    it('mockPosts should be assigned to local posts', async () => {

        // create a wrapper by 'mounting' the PostComponent. NOTE: This is not a 'real' component. Only in-memory representation.
        const wrapper = mount(PostComponent);

        // Cast `vm` to the correct type
        const vm =  wrapper.vm as unknown as { posts: typeof mockPosts }; // make sure the `posts`property is known on the wrapper

        vm.posts = mockPosts; // Access posts with proper typing

        await wrapper.vm.$nextTick(); // Wait for the reactive update

        expect(vm.posts.length).toBe(2); // Check the length
        expect(vm.posts).toEqual(mockPosts); // Assert equality
    });


    it('renders loading state initially', async () => {
        // Set up fetch to return an empty response for this test
        (global.fetch as ReturnType<typeof vi.fn>)
            .mockResolvedValueOnce({
                ok: true,
                json: () => Promise.resolve([]),
            });

        const wrapper = mount(PostComponent);

        // Verify that the loading text is visible
        expect(wrapper.text()).toContain('Loading posts...');
    });


    it('renders error state if fetch fails', async () => {
        // Mock fetch to reject (simulate an error)
        (global.fetch as ReturnType<typeof vi.fn>)
            .mockRejectedValueOnce(new Error('Failed to fetch posts'));

        const wrapper = mount(PostComponent);

        // Using flushPromises() here. E.g. wait for fetch to complete and for reactive properties to update.
        // Wsing wrapper.vm.$nextTick() will NOT work in this case, as it is 'too fast' and does not wait
        // for the error message to propagate to the DOM.
        await flushPromises();

        // Verify that an error message is displayed
        expect(wrapper.text()).toContain('Failed to fetch posts');
    });


    it('renders a list of posts when fetch is successful', async () => {
        // Mock fetch to return mock posts.
        // This time, resolve the promise using the mocked posts (as defined above).
        (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockPosts),
        });

        // Create a wrapper
        const wrapper = mount(PostComponent);

        // wait for the promise(s) to resolve
        await flushPromises();

        // NOTE: We updated the template for that. In the 'real' application, the post is passed on
        // to the <PostCard> component, where it should be tested. We mocked this component out, so we do it here.
        // Validate that each mock post is in the rendered output
        mockPosts.forEach((post) => {
            expect(wrapper.text()).toContain(post.title);
        });
    });

    it('renders no posts if fetch returns empty data', async () => {
        // Mock fetch to return an empty array (e.g. No posts)
        (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve([]),
        });

        // create a wrapper
        const wrapper = mount(PostComponent);

        // wait for the promise(s) to resolve
        await flushPromises();

        // Ensure no posts are rendered
        expect(wrapper.findAll('.PostCard').length).toBe(0);
    });
});
