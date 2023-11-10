const express = require('express');
const app = express();
const port = 4000;

// Set up a simple route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Add CORS (Cross-Origin Resource Sharing) middleware to allow cross-origin requests
const cors = require('cors');
app.use(cors());

// Handles CORS errors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set up body-parser middleware to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST requests to '/api/book' endpoint
app.post('/api/book', (req, res) => {
    console.log(req.body);
    res.send("Data Received!");
});

// Handle GET requests to '/api/books' endpoint
app.get('/api/books', (req, res) => {
    // Sample data for books
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            // Other book details...
        },
        // Additional book entries...
    ];

    // Respond with JSON containing book data and additional information
    res.json({
        myBooks: books,
        "Message": "Some Info",
        "Disclaimer": "Hello World!"
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
