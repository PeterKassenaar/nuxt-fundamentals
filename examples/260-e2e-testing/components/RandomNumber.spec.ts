import {it, expect, describe, vi} from 'vitest';
import {mockNuxtImport, mountSuspended} from '@nuxt/test-utils/runtime'
import {RandomNumber} from "#components";

// Helper function. mockNuxtImport can only be used once (1x) in a file
// mockNuxtImport('useState', () => {
//     return () => 20000;
// })

describe('RandomNumber Component', () => {
    // 1. Test if the component can mount
    it('1. can mount the component', async () => {
        const component = await mountSuspended(RandomNumber)
        expect(component).toBeTruthy();
    })

    // 2. Test if the HTML is correctly rendered (note: no wrapper.vm necessary)
    it('2. has the text Random Number Generator', async () => {
        const component = await mountSuspended(RandomNumber)
        expect(component.html()).toContain('Random number generator');
    })

    // 3. Test if the state is correctly used. See helper function mockNuxtImport, above
    it.skip('3. returns the state', async () => {
        const component = await mountSuspended(RandomNumber)
        console.log(component.text());
        expect(component.text()).toContain('20000') // will fail if helper function above is commented out.
    })

    // 4. Test if the refresh() function is called when button is clicked
    it('4. should call the refresh function when button is clicked', async () => {
        // Mount the component using `mountSuspended`
        const component = await mountSuspended(RandomNumber)

        // Access the text element displaying the random number
        const numberBefore = component.find('h3').text()

        // Simulate click on the refresh button
        await component.find('button').trigger('click')

        // Access the text element displaying the random number again
        const numberAfter = component.find('h3').text()

        // Verify that the number displayed is updated
        expect(numberBefore).not.toBe(numberAfter)
    })


    // 5. Check if a new random number is generated every time by mocking Math.Random()
    it('5. should generate a new random number on refresh', async () => {

        // Spy on Math.random() and mock it's implementation
        const randomSpy = vi.spyOn(Math, 'random')
            .mockImplementation(() => 0);

        // Mock the first random number
        randomSpy.mockReturnValueOnce(0.5); // First random number
        const component = await mountSuspended(RandomNumber);

        // Simulate click on the refresh button
        await component.find('button').trigger('click')

        // Initial rendering of the random number
        const initialNum = parseInt(component.find('h3').text());
        expect(initialNum).toBe(50000); // 0.5 * 100000

        // Mock Math.random() for subsequent numbers
        randomSpy.mockReturnValueOnce(0.8); // Second random number
        await component.find('button').trigger('click'); // Simulate click event
        const numAfterFirstClick = parseInt(component.find('h3').text());
        expect(numAfterFirstClick).toBe(80000); // 0.8 * 100000

        randomSpy.mockReturnValueOnce(0.3); // Third random number
        await component.find('button').trigger('click'); // Simulate another click event
        const numAfterSecondClick = parseInt(component.find('h3').text());
        expect(numAfterSecondClick).toBe(30000); // 0.3 * 100000

        // Clean up by restoring the original implementation
        randomSpy.mockRestore();
    })
})
