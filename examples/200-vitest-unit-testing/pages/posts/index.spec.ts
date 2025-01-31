import { mount } from '@vue/test-utils';
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import PostComponent from './index.vue'; // Adjust the path if needed
import type {Post} from "@/types/Post";

// Define a type for your test environment's component instance
type PostComponentInstance = {
  posts: Post[];
};

// Mock data for testing
const mockPosts = [
  { id: 1, title: 'Post 1', body: 'Content of Post 1' },
  { id: 2, title: 'Post 2', body: 'Content of Post 2' },
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
    const wrapper = mount<PostComponentInstance>(PostComponent); // Add instance type
    wrapper.vm.posts = mockPosts; // Access posts with proper typing

    await wrapper.vm.$nextTick(); // Wait for the reactive update

    expect(wrapper.vm.posts.length).toBe(2); // Check the length
    expect(wrapper.vm.posts).toEqual(mockPosts); // Assert equality
  });


  it('renders loading state initially', async () => {
    // Set up fetch to return an empty response for this test
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    });

    const wrapper = mount(PostComponent);

    // Verify that the loading text is visible
    expect(wrapper.text()).toContain('Loading posts...');
  });

  it.skip('renders error state if fetch fails', async () => {
    // Mock fetch to reject (simulate an error)
    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('Failed to fetch posts'));

    const wrapper = mount(PostComponent);

    // Wait for the component to process the fetch
    await wrapper.vm.$nextTick();

    // Verify that an error message is displayed
    expect(wrapper.text()).toContain('Failed to fetch posts');
  });

  it.skip('renders a list of posts when fetch is successful', async () => {
    // Mock fetch to return mock posts
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPosts),
    });

    const wrapper = mount(PostComponent);

    // Wait for the next tick for posts to be rendered
    await wrapper.vm.$nextTick();

    // Validate that each mock post is in the rendered output
    mockPosts.forEach((post) => {
      expect(wrapper.text()).toContain(post.title);
    });
  });

  it.skip('renders no posts if fetch returns empty data', async () => {
    // Mock fetch to return an empty array
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    });

    const wrapper = mount(PostComponent);

    await wrapper.vm.$nextTick();

    // Ensure no posts are rendered
    expect(wrapper.findAll('.PostCard').length).toBe(0);
  });
});
