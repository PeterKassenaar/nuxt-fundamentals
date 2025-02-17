// cities.ts. Example of returning some data from a server side route.
// This route is calles via '/api/cities' and retrieves the <string[]> of cities.
export default defineEventHandler(() => {
    return [
        'Berlin', 'Amsterdam', 'Paris', 'London'
    ]
})
