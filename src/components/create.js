import { useState } from "react";

function Create() {

    // Define state variables for title, cover, and author using the 'useState' hook
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Define a function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Log the values of title, cover, and author when the form is submitted
        console.log("Title: " + title +
            " Cover: " + cover +
            " Author:" + author);

            axios.post('http://localhost:4000/api/books', book)
            .then()
            .catch();
    }

    return (
        <div>
            <h2>Hello from Create Component!</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} // Update the 'title' state when the input value changes
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }} // Update the 'cover' state when the input value changes
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }} // Update the 'author' state when the input value changes
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book" /> {/* Submit button to trigger the 'handleSubmit' function */}
                </div>
            </form>
        </div>
    );
}

export default Create; // Export the 'Create' component
