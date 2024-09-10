const exp = require('express');
const app = exp();
app.use(exp.json());
let books = [
    
        {
          "id": 1,
          "title": "The Lion, the Witch and the Wardrobe",
          "author": "C.S. Lewis",
          "year": 1950,
          "genre": "Fantasy"
        },
        {
          "id": 2,
          "title": "Charlotte's Web",
          "author": "E.B. White",
          "year": 1952,
          "genre": "Animal Fiction"
        },
        {
          "id": 3,
          "title": "The Magic School Bus at the Waterworks",
          "author": "Joanna Cole",
          "year": 1986,
          "genre": "Educational"
        },
        {
          "id": 4,
          "title": "The Cat in the Hat",
          "author": "Dr. Seuss",
          "year": 1957,
          "genre": "Comedy"
        },
        {
          "id": 5,
          "title": "A Wrinkle in Time",
          "author": "Madeleine L'Engle",
          "year": 1962,
          "genre": "Science Fiction"
        }
      
      
]

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  });

app.get('/books', (req, res) => {
    res.json(books)
})

app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre
      };
      books.push(newBook);
      res.status(201).json(newBook);
})


app.listen(port = 3000, () => {
    console.log(`app is running at http://localhost:${port}`)
})