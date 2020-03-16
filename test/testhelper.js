/* eslint-disable quotes */
const fsdb = require("../api/firebase");

const testhelper = {
  testResults: [
    {
      authors: ["Mikael Krogerus", "Roman Tschäppeler"],
      categories: ["Self-Help"],
      coverImage:
        "http://books.google.com/books/content?id=lPV1CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description:
        "An essential library of tests for self-knowledge and success, from the strategic thinking experts behind the international bestseller The De...",
      id: "lPV1CQAAQBAJ",
      previewLink:
        "http://books.google.com/books?id=lPV1CQAAQBAJ&printsec=frontcover&dq=test&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
      publishedDate: "2015-10-05",
      publisher: "W. W. Norton & Company",
      subtitle: null,
      title: "The Test Book"
    },
    {
      authors: ["S. Wise Bauer"],
      categories: ["JUVENILE NONFICTION"],
      coverImage:
        "http://books.google.com/books/content?id=SEWckGC4I10C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description:
        "Chronological history of the modern age, from 1850 to 2000.",
      id: "SEWckGC4I10C",
      previewLink:
        "http://books.google.com/books?id=SEWckGC4I10C&printsec=frontcover&dq=test&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
      publishedDate: "2003",
      publisher: "Peace Hill Press",
      subtitle: null,
      title: "The modern age, from Victoria's empire to the end of the USSR"
    },
    {
      authors: [
        "Lyle F. Bachman",
        "Professor of Applied Linguistics Lyle F Bachman",
        "Adrian S. Palmer"
      ],
      categories: ["Foreign Language Study"],
      coverImage:
        "http://books.google.com/books/content?id=E0yH0NdySrQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description:
        "This book relates language testing practice to current views of communicative language teaching and testing. It builds on the theoretical ba...",
      id: "E0yH0NdySrQC",
      previewLink:
        "http://books.google.com/books?id=E0yH0NdySrQC&pg=PA17&dq=test&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
      publishedDate: "1996-09-19",
      publisher: "Oxford University Press",
      subtitle: "Designing and Developing Useful Language Tests",
      title: "Language Testing in Practice"
    },
    {
      authors: ["James A. Whittaker", "Jason Arbon", "Jeff Carollo"],
      categories: ["Computers"],
      coverImage:
        "http://books.google.com/books/content?id=vHlTOVTKHeUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description:
        "Describes the techniques Google uses to test their software, and offers similiar techniques for analyzing risk and planning tests, allowing ...",
      id: "vHlTOVTKHeUC",
      previewLink:
        "http://books.google.com/books?id=vHlTOVTKHeUC&printsec=frontcover&dq=test&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
      publishedDate: "2012",
      publisher: "Addison-Wesley Professional",
      subtitle: null,
      title: "How Google Tests Software"
    },
    {
      authors: ["Frances Talaska Fischbach", "Marshall Barnett Dunning"],
      categories: ["Medical"],
      coverImage:
        "http://books.google.com/books/content?id=CQuBkXDspBkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description:
        "Now in its Eighth Edition, this leading comprehensive manual helps nurses deliver safe, effective, and informed care for patients undergoing...",
      id: "CQuBkXDspBkC",
      previewLink:
        "http://books.google.com/books?id=CQuBkXDspBkC&pg=PA138&dq=test&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
      publishedDate: "2009",
      publisher: "Lippincott Williams & Wilkins",
      subtitle: null,
      title: "A Manual of Laboratory and Diagnostic Tests"
    },
    {
      authors: ["John M. Holt"],
      categories: ["Compliance"],
      coverImage:
        "http://books.google.com/books/content?id=Pqcesk8iZzMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: null,
      id: "Pqcesk8iZzMC",
      previewLink:
        "http://books.google.com/books?id=Pqcesk8iZzMC&pg=PA35&dq=test&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
      publishedDate: "1990-01-01",
      publisher: "ASTM International",
      subtitle: "Factors and Variables",
      title: "Charpy Impact Test"
    },
    {
      authors: ["Bernd Schnütgen", "Lucie Vandewalle"],
      categories: ["Cement composites"],
      coverImage:
        "http://books.google.com/books/content?id=lMTIIQb-MO8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: null,
      id: "lMTIIQb-MO8C",
      previewLink:
        "http://books.google.com/books?id=lMTIIQb-MO8C&pg=PA1&dq=test&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
      publishedDate: "2003",
      publisher: "RILEM Publications",
      subtitle: null,
      title:
        "PRO 31: International RILEM Workshop on Test and Design Methods for Steel Fibre Reinforced Concrete - Background and Experiences"
    },
    {
      authors: ["Richard Chait"],
      categories: ["Composite materials"],
      coverImage:
        "http://books.google.com/books/content?id=cR5pNv76HMgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: null,
      id: "cR5pNv76HMgC",
      previewLink:
        "http://books.google.com/books?id=cR5pNv76HMgC&pg=PA78&dq=test&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
      publishedDate: "1983",
      publisher: "ASTM International",
      subtitle: "A Symposium",
      title: "Compression Testing of Homogeneous Materials and Composites"
    },
    {
      authors: ["Joseph R. Davis"],
      categories: ["Brittleness"],
      coverImage:
        "http://books.google.com/books/content?id=5uRIb3emLY8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: null,
      id: "5uRIb3emLY8C",
      previewLink:
        "http://books.google.com/books?id=5uRIb3emLY8C&pg=PA115&dq=test&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
      publishedDate: "2004",
      publisher: "ASM International",
      subtitle: null,
      title: "Tensile Testing, 2nd Edition"
    },
    {
      authors: ["Adrian F. Richards"],
      categories: ["Electronic book"],
      coverImage:
        "http://books.google.com/books/content?id=G5ZZuwpJdLEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      description: null,
      id: "G5ZZuwpJdLEC",
      previewLink:
        "http://books.google.com/books?id=G5ZZuwpJdLEC&pg=PA182&dq=test&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
      publishedDate: "1988",
      publisher: "ASTM International",
      subtitle: "Field and Laboratory Studies",
      title: "Vane Shear Strength Testing in Soils"
    }
  ],
  async removeTest(search) {
    let testExists = fsdb
      .collection("searches")
      .doc(search)
      .delete();

    // return testExists;
  },
  async checkForTest() {
    let testExists = fsdb.collection("searches").doc("test");

    const snapshot = await testExists.get();
    if (snapshot.exists) return true;
    else return null;
  }
};

module.exports = testhelper;
