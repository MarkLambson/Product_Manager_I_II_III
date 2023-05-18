import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {

    const [title, setTitle] = useState("");

    const [price, setPrice] = useState(0);

    const [description, setDescription] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                // log and test!
                console.log("Edit page good to go!", res)
                const product = res.data.results;
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
            .catch((err) => {
                console.log("ERROR => edit page", err)
            })
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedData = { title, price, description };

        axios.put(`http://localhost:8000/api/products/update/${id}`, updatedData, { new: true })
            .then((res) => {
                // log and test!
                console.log("Update Page good to go!", res)
                navigate('/')
            })
            .catch((err) => {
                console.log("ERROR => update page", err)
            })
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                {/* Title input */}
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                {/* Price input */}
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>

                {/* Description input */}
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

export default Edit