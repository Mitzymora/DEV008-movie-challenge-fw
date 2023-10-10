import React, {useState }from "react"

export default function SearchInput ({onSearch}){
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (e) =>{
        setSearchTerm(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    };
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
            <input className="search-input" 
            placeholder="Buscar" 
            type="search" 
            value={searchTerm}
            onChange={handleChange}
            autoFocus/> 
            <button type ="submit">Buscar</button>
        </form>         
        </div>
    );
}