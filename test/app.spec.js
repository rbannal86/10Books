const app = require("../api/app");
const testhelper = require("./testhelper");

before("remove test documents", async () => {
  await testhelper.removeTest("test");
  await testhelper.removeTest("fksjfnkjn");
});

describe("Test for the test", () => {
  it("GET / responds with Hello!", () => {
    return supertest(app)
      .get("/")
      .expect(200, "Hello!");
  });
});

describe("Starting with a new search", () => {
  it("Search term 'test' does not exist in firestore", async () => {
    let testExists = await testhelper.checkForTest();
    expect(testExists).to.equal(null);
  });
  it("GET /api/books/searchterm responds with 200 and appropriate resObject", () => {
    return supertest(app)
      .get("/api/books/test")
      .expect(200)
      .expect(res => {
        expect(res.body).to.eql(testhelper.testResults);
      });
  });
  it("Creates the appropriate document in the search category in firestore", async () => {
    let testExists = await testhelper.checkForTest();
    expect(testExists).to.equal(true);
  });
  it("Returns the same data from firestore as it did from google", () => {
    return supertest(app)
      .get("/api/books/test")
      .expect(200)
      .expect(res => {
        expect(res.body).to.eql(testhelper.testResults);
      });
  });
});

describe("A search has no results", () => {
  it("Returns an appropriate response when nothing is found", () => {
    return supertest(app)
      .get("/api/books/fksjfnkjn")
      .expect(200)
      .expect(res => {
        expect(res.body).to.eql([]);
      });
  });
});
