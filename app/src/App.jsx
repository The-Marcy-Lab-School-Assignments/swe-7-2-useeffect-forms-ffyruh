/* 
GifSearch is a controlled form that sets a search term to find gifs
GifContainer must take the search term and then fetch gifs according from the search/ endpoint

TODO:
- Share the searchTerm state set by the GifSearch form with the GifContainer
*/

import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'

// i'm doing search in gifsContainer instead
// import { getGifsBySearch } from './adapters/giphyAdapters'

import { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchInput');
    const temp = input.value;
    
    input.value = ''; // clear the value from the box
    setSearchTerm(temp); // pass in new prop so gifsContainer rerenders
  }

  const handleInput = (searchTerm) => { setSearchTerm(searchTerm); }

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch
          handleSubmit={handleSubmit}
          handleInput={handleInput}
        />
        <br />
        <GifContainer searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
