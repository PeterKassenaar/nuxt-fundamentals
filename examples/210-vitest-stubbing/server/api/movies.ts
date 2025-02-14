// movies.ts

// import interface to satisfy TypeScript
import {MovieApiResponse} from "@/models/MovieInterfaces";

export default defineEventHandler(async (event) => {
    // deconstructing the name from the querystring. It is send as /api/movies?name=batman, or the like.
    const {name} = getQuery(event)

    // private key. Don't expose this to outside world!
    const apiKey = 'f1f56c8e';

    // compose the url to call
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${name}`

    // call and await the results
    const result = await $fetch<MovieApiResponse>(url)
    console.log(result.Search); // debugging

    // return results to the calling component. This one never knows which server was actually called.
    return result.Search // NOTE: returning the .Search[] here, BECAUSE THIS API wraps the data in a Search[] array. Check YOUR API! Don't blindly return .Search in your calls.
})
