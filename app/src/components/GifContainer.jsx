/* 
This component is meant to display gifs. However, there are two different sets of gifs that this component can display, depending on the user's actions. At first, they should see trending gifs but after submitting a search term in the GifSearch form, they should see gifs related to their search.

TODO:
- use the getTrendingGifs adapter to fetch trending gifs on the first render
- each time the user submits the form in GifSearch, use the getGifsBySearch adapter to fetch gifs according to the search term.
- render the list of fetched gifs (or the defaultGifs) as list items with an `img` inside. Remember to give each list item a unique key!
- Bonus: if at any point an error is returned, render the default gifs again.
*/

import { useState, useEffect } from 'react';
import '../App.css';

import defaultGifs from '../gifs.json';
import { getGifsBySearch, getTrendingGifs } from '../adapters/giphyAdapters';

const GifContainer = ({ searchTerm }) => {
  const [gifsArr, setGifsArr] = useState([]);
  useEffect(() => {
    const fetchGifs = async () => {
      let gifs;
      if (searchTerm === '') gifs = await getTrendingGifs();
      else gifs = await getGifsBySearch(searchTerm);

      if (!gifs) setGifsArr(defaultGifs);
      else setGifsArr(gifs.data);
    };
    fetchGifs();
  }, [searchTerm]);


  return (
    <div className='ul-container'>
      <ul>
        {
          (gifsArr !== defaultGifs) ? <></>
          : <li key='errorMsg'>
              <h1>Sorry, the GIPHY API is not working, but here are some cats</h1>
            </li>
        }
        {
          (gifsArr.length === 0)
            ? 'loading'
            : gifsArr.map((v) => {
                return (
                  <li key={`gif-${crypto.randomUUID()}`}>
                    <img src={v.images.original.url} />
                  </li>
                )
              })
        }
      </ul>
    </div>
  )
}

export default GifContainer
