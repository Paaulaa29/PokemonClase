import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";



const Search = ({ onSearch }) => { //Recibe una función como parámetro
    const handleInputChange = (e) => { //
        onSearch(e.target.value);    //
    };
    return (
        <div className="d-flex align-items-center border rounded-pill px-3 py-1">
            <span className="iconStyle">
                <FaSearch />
            </span>
            <input
                type="search"
                placeholder="Buscar..."
                onChange={handleInputChange} //Cada vez que se teclea se llama al onSearch pasándole la query
                className="inputStyle"
            />
        </div>
    );
};
export default Search;