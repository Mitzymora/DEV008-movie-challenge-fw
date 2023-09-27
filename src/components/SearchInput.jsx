import React, {useState }from "react"

export default function SearchInput (){
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
        </form>         
        </div>
    );
}