export default function CardsMovies (props, movieName, yearMovie = "Unknown") {
const prueba = props.title;
const imageSrc = props.movieName;
const  imageAlt = `Poster de la pelicula ${movieName}`;
const yearMovieCreated =  `Año de estreno: ${yearMovie}`;
return (
    <div> 
        <img 
        className = "cards-movie"
        src= {imageSrc}
        alt = {imageAlt} 
        width={200}
        height={300} 
        />
        <section className="infoMovie">
        <h1>{prueba}</h1>
        <p>{yearMovieCreated}</p> 
        </section>
    </div>
)
}

export function Titlemovie (){
    <>
    <section>

    </section>
    </>
}