## Hello!

### My name is Alex Bannow

##### This is my submission for the full-stack challenge at DocNetwork

A few things for getting started:

1. npm install (You guys are professionals, so this is obvious).
2. The .env file needs to be created and filled out with the correct information. I will include the information for all of the (currently blank) firestore stuff in an email. A Google API KEY should also be included. The format can be found in the example.env file.
3. npm run test to run a few tests on the backend
4. If that's all working, npm run dev or npm run start to get the server up and running. It should be on localhost:8000.
5. Once that's up, you can run the Cypress integration tests using npm cypress:open. It might take a minute to get going. Click on book_spec.js and it should automatically start.
6. Once that's all working correctly, you can open the React App using npm start.
7. You can view the Firestore database at: https://dn-books.firebaseio.com

##### A Little Bit About The Project

I decided to use express and axios for hooking up the backend. Database-wise, I went with Firestore. I thought that the potentially large amount of data, and fairly simple objects, would make a good pairing with Firestore. And it's incredibly easy to query.

Frontend-wise, I went with React. That's the framework I know best. My next project will be learning Vue, but I'm very comfortable with React. All of the components are functional, which makes for a much cleaner presentation code-wise.

I decided to hard-limit the number of books to ten. GoogleBooks allows for up to 40 books to return in a query. While it would be nice to have all of that data, I thought that, with my UI design, an overload of books would make for a cluttered presentation. One thing I would like to include in the future is a limited return with the first GoogleBooks query, but a script that activates and pulls in all of the books for that search. Then, a user would be able to cycle through the book information via the Firestore database. Another thing to include in the future would be a check on the date created for searches in the Firestore database and update the books if the date is stale.

I really enjoyed undertaking this project. It helped me start learning axios and cypress. Cypress was especially enjoyable to work with.

Thanks for the opportunity and I look forward to any feedback!
