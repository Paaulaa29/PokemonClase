import React, { useState } from "react";


const Search = ({ onSearch }) => { //Recibe una función como parámetro
 const handleInputChange = (e) => { //
   onSearch(e.target.value);    //
 };
   return (
       <input
           type="search"
           placeholder="Buscar..."
           onChange={handleInputChange} //Cada vez que se teclea se llama al onSearch pasándole la query
       />
   );
};
export default Search;