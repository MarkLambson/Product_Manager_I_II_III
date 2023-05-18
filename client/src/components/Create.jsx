import React, { useState } from 'react';
import axios from 'axios';


const Create = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const [created, setCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Post new song into database
        axios.post("http://localhost:8000/api/products/new", { title, price, description })
            .then((res) => {
                // log and test!
                console.log("Create Page good to go!", res);
                setCreated(!created);
            })
            .catch((err) => {
                console.log("ERROR => create page:", err);
            })
    }

    return (
        <div>
            <h1>Create Product</h1>
            <form onSubmit={handleSubmit}>
                {/* Title input*/}
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                {/* Price input*/}
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>

                {/* Description input*/}
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

                <button className='btn btn-outline-info'>Submit</button>
            </form>
        </div>
    )
}

export default Create