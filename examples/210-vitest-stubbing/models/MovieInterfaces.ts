// Typing the results from OMDb API. See https://www.omdbapi.com/ for details
// This is only done to satisfy TypeScript and get intellisense on the movie properties.
export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface MovieApiResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
}
