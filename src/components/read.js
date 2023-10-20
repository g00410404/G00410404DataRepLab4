import { useEffect, useState } from "react";
import Books from "./books"; 
import axios from "axios";

function Read() {

    // Initialize a state variable 'data' using the 'useState' hook
    const [data, setData] = useState([]);

    // Use the 'useEffect' hook to perform an HTTP GET request
    useEffect(
        () => {
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(
                    (response) => {
                        setData(response.data.books); // Set the 'data' variable with the books data from the response
                    }
                )
                .catch(
                    (error) => {
                        console.log(error); // Log any errors that occur during the HTTP request
                    }
                );
        }, [] // An empty dependency array means this effect will only run once when the component mounts
    );

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Books myBooks={data}></Books> {/* Render the 'Books' component with the 'data' */}
        </div>
    );

}

export default Read; // Export the 'Read' component
