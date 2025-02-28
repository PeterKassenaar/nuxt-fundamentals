import {describe, expect, it} from 'vitest'
import {mountSuspended, renderSuspended} from '@nuxt/test-utils/runtime'
import HelloWorld from "~/components/HelloWorld.vue";

describe('HelloWorld Component', () => {

    // Test a prop, passed in to the component by adding
    // a configuration object to `mountSuspended()`
    const myMsg = 'Dummy message'
    // 1. Test if the component compiles at all
    it('can mount', async () => {
        const component = await mountSuspended(HelloWorld, {
            props: {
                msg: myMsg,
            }
        });
        expect(component).toBeTruthy();
    })

    it('sets the message correctly', async () => {
        const component = await mountSuspended(HelloWorld, {
            props: {
                msg: myMsg,
            }
        });
        // console.log(component.text());
        expect(component.text()).toContain(myMsg)
    })

    // workshop: add a test to test the `count` property. Also emulate clicking the button and expect the count to be +1.
})
