import React from 'react';

import useInput from '../custom-hooks/useInput';

const Search = ({players}) => {
    const [handleChange, formSubmit, searchResults, searchTerm] = useInput(players);
    return (
        <div className ='search-container'>
            <div>
                <form onSubmit={formSubmit}>
                    <input
                        id='search'
                        type='text'
                        name='searchBar'
                        placeholder='Searching For A Player?'
                        value={searchTerm}
                        onChange={handleChange} 
                    />
                    <button> Search </button>
                </form>
                <div>
                    {
                        searchResults.map(player => {
                            return (
                                <div key={player.id} className='search-result'>
                                    <p> {player.name} </p>
                                    <p> {player.country} </p>
                                </div>
                                
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;