import { useState, useEffect } from "react";


export default function FetchMovies (props){
    const [data, setData] = useState ([]);
    //const [loading, setLoading] = useState (true);
    let API_URL = 'https://www.omdbapi.com/?apikey=2029afe7&S=vendetta'
    const [search, setSearch]=useState(API_URL)
    useEffect(() =>{
    fetch(API_URL)
    .then((response) => response.json() )
    .then((data) => {setData(data.Search);
    });
}, [API_URL])
console.log(data);

return (
        <div className='card-container'>
        {data && data.length> 0? (
            data.map( (movie) => (
                <div className="card-div" key={movie.imdbID}> 
                <img  className = "cards-movie"
                src= {movie.Poster}
                alt = {movie.Title} 
                width={200}
                height={300} />
                <h1>{movie.Title}</h1>
                <p>Año de estreno: {movie.Year}</p>  
                </div>
            ))
        ): (
            <p>No se encontraron perlículas.</p>
        )}
            </div>
        );
}