## Google Books API ... API

For this challenge you will be creating a rudimentary Express API to query and store results from
the Google Books API. This is a test of basic NodeJS and back end proficiency.

### Instructions
- Clone this repository and complete the challenge according to the specifications below.
- Once finished, email your
  [patch](https://robots.thoughtbot.com/send-a-patch-to-someone-using-git-format-patch) to
  jobs+dev@docnetwork.org and we will review your submission. **(Do _Not_ Open A Pull Request)**

### Specifications
 You will need to 



### Resources
- NodeJS https://nodejs.org/en/
- ExpressJS https://expressjs.com/
- PostgreSQL https://www.postgresql.org/docs/, https://node-postgres.com/
- Google Books API https://developers.google.com/books/docs/v1/reference/
- DocNetwork! If you have any questions about the specifications or how to implement something, feel free to reach out to us. It will not count against your final review, and may even end up being a plus.


# A Big Stack of Google Books

So you're full stack, huh? Name every stack. Just kidding, we believe ya.

This challenge is an opportunity to show off your skills across the entire stack. You'll build a
rudimentary search engine that falls back to Google Books. Your front end will take in queries and
display results. Your back end receives those queries and either returns a cached result (for
previously submitted queries) or makes a call to the Google Books API.


## Requirements
- General
  - All code must be your own. Do not plagiarize, copy, or steal code.
  - Research the [Google Books Volume
    API](https://developers.google.com/books/docs/v1/reference/volumes) to determine how to search
    for books given a query.
  - Create an [API key](https://developers.google.com/books/docs/v1/using#APIKey). Keys are not
    required for making requests to the Google API, but supporting them is required for this
    challenge.
    - Security is important, so don't send us your Books API key! The key should be loaded in
      through an external file that is not included in your patch.
  - Include instructions for a reviewer to set up and use your application. This could be scripts,
    migration files, or just plain text describing the schema and required steps to get everything
    running.
- API
  - Must use the `express` server framework (included)
  - Must use a database of some type
    - We've included the `pg` package, but you can use any SQL or NoSQL database engine.
  - Implement an API route that accepts a search query, passes that along to the Books API (using a
    utility such as [https](https://nodejs.org/api/https.html),
    [axios](https://www.npmjs.com/package/axios), or
    [request](https://www.npmjs.com/package/request) to name a few), and responds with a collection
    of book results in a JSON format that includes the following details:
    - Title
    - Subtitle
    - Authors
    - Description (First 140 characters)
    - Categories
    - Publisher
    - Published Date
    - Preview Link
    - Cover Image (URL)
  - Each query should store the search query and associated responses. Entries should include all of
    the above information as well as a timestamp of when the entry was created.
  - When a search is run using a query that's already stored in your DB, return the results from
    your DB. If no existing match is found, continue with the Books API call and return those
    results as usual.
- Browser
    - There should be a search bar to input a query.
    - The results should be rendered in the results area. You must include these fields (if available for the record):
      - Cover image
      - Title
      - Subtitle
      - Authors
      - Description
      - Preview Link ("View on Google Books")
  - Each subsequent query should append or prepend its results to the results area.
  - There must be no duplicates (by Google Books id).
  - **The results should be visually appealing, styled logically, and fully responsive for mobile devices.**
  - While you must use the three function stubs provided in `main.js`, this challenge will require
    you to write some code outside of them.
  - We've included a Vue CLI project as a starter for your front end.
    - We use Vue and AngularJS at DocNetwork, but you may use React or Angular for this challenge if preferred
    - You may _not_ use jQuery

## Instructions
- Fork this repository and complete the challenge according to the specifications below.
- Once finished, email your [patch](https://robots.thoughtbot.com/send-a-patch-to-someone-using-git-format-patch) to jobs+dev@docnetwork.org and we will review your submission. **(Do _Not_ Open A Pull Request)**

## Notes
- **This is a design-oriented challenge.** While your project must be fully functional according to the specs below, we will be paying special attention to your design decisions. Prioritize user experience and show us your style!
- While not necessary, you may use Vue, AngularJS, or React (in that order of preference) to complete this project if you are more comfortable using a framework.
- You are encouraged (but not required) to use ES6+ JavaScript. We will be testing your submission with Chrome latest, but we have also included Babel as a dependency of this package. You may transpile and minify `main.js` by running `npm run build`. If you choose to do this, please adjust `index.html` accordingly.
- All code must be your own. Do not plagarize, copy, or steal code.

## Specifications
- Research the [Google Books Volume API](https://developers.google.com/books/docs/v1/reference/volumes) to determine how to search for books given a query. You will need to create an [API key](https://developers.google.com/books/docs/v1/using#APIKey).
