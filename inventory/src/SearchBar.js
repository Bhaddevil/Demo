import { useState } from "react";

function SearchBar(props){
    return(
        <div>
            <h1> Search for an item</h1>
            <form>
                <label for="name-field">Name:</label>
                <input id="name-field" type="text"/>
                <label for="price-field">Max Price:</label>
                <input id="price-field" type="number"/>
                <label for="type-field">Type:</label>
                <input id="type-field" type="text"/>
                <label for="brand-field">Brand:</label>
                <input id="brand-field" type="text"/>
                <button>Search</button>

            </form>
        </div>
    );
    
}
export default SearchBar;