import Results from '@/components/Results';
import React from 'react'

export default async function searchPage({ params }) {
    const respone = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`)
    if (!respone.ok) {
        throw new Error("Error fetching data.");
    }
    const search = await respone.json();
    const results = search.results;
    return (
        <div>{results && results.length === 0 && (
            <h1 className='text-center pt-6'>No results found!</h1>
        )}
            {results && <Results results={results} />}
        </div>
    )
}
