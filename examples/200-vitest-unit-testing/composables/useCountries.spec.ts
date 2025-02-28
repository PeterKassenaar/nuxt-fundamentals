// tests/composables/useCountries.spec.ts
//**********************
// Writing a unit test for a composable - which is NOT a component (!)
//**********************
import {describe, it, expect, vi} from "vitest";
import {flushPromises} from "@vue/test-utils";
import axios from "axios";
import type { Mocked } from "vitest"; // import the type
import {useCountries} from "./useCountries.js"; // the composable to test

// Mock axios globally, then update the typings to satisfy TypeScript.
vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("useCountries composable", () => {
    it("should initialize with empty countries and errors", () => {
        const {countries, errors} = useCountries();
        expect(countries.value).toEqual([]);
        expect(errors.value).toEqual([]);
    });

    it("should fetch countries successfully", async () => {
        // Mock a successful response
        const mockData = [
            {name: {common: "Netherlands"}},
            {name: {common: "Germany"}}
        ];
        mockedAxios.get.mockResolvedValue({data: mockData});

        const {countries, fetchCountries} = useCountries();

        await fetchCountries();
        await flushPromises(); // Wait for any pending promises to resolve

        expect(countries.value).toEqual(mockData);
    });

    it("should handle API failure and update errors", async () => {
        // Mock a failed response
        const mockError = new Error("Network Error");
        mockedAxios.get.mockRejectedValue(mockError);

        const {errors, fetchCountries} = useCountries();

        await fetchCountries();
        await flushPromises();

        expect(errors.value).toContain(mockError);
    });

    it("should have fetchCountries function", () => {
        const {fetchCountries} = useCountries();
        expect(typeof fetchCountries).toBe("function");
    });
});
