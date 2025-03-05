## Tech Checklist

There are 10 tasks to complete and 3 bonuses. As you work, return to this README file and check off each task by putting an `x` inside of the brackets `[ ]`.

Your goal is to meet at least 75% of these requirements to complete the assignment. But don't stop there! Shoot for 100%!

**Functionality:**
- [x] When a user first loads the app, they should see 3 gifs from today's [Giphy API "Trending Gifs" endpoint](https://developers.giphy.com/docs/api/endpoint#trending).
- [x] The user can search for gifs using the [Giphy API search endpoint](https://developers.giphy.com/docs/api/endpoint#search).
- [x] The app updates the gifs on the page, displaying 3 at a time, **every time the user clicks the Find Gifs button**.
- [x] Bonus: if an error occurs, the `defaultGifs` from `gifs.json` are displayed along with a message reading `"Sorry, the GIPHY API is not working, but here are some cats"`.

**React Fundamentals**
- [x] Props are extracted in child components using destructuring
- [x] `useState` is used to manage state
- [x] `useEffect` is used to perform an asynchronous fetch call.
- [x] The gifs are displayed as an unordered list (`ul`)
- [x] Every `li` in the `ul` has a unique `key` prop
- [x] The form is a controlled form.
- [x] Bonus: modify the `useEffect` hook to be re-triggered whenever the user input changes (not just when they click the button).

**Miscellaneous**
- [x] The `config.js` file is listed in the `.gitignore` and is NOT included in the final repository.
- [x] At no point did you ever use any vanilla DOM JS methods (e.g. `document.querySelector` or `document.createElement`)
- [x] Bonus: Display the gifs as a grid using flexbox or grid!
