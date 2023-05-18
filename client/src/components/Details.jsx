import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const [product, setProduct] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    const homeButton = (event) => {
        event.preventDefault();
        navigate('/');
    }

    const editButton = (event) => {
        event.preventDefault();
        navigate(`/${id}/edit`)
    }

    const deleteButton = (event) => {
        event.preventDefault();

        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res) => {
                // log and test!
                console.log("Delete res good to go!", res)
                navigate('/');
            })
            .catch((err) => {
                console.log("ERROR => delete res", err)
            })
    }

    // Get Product Info
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                // log and test!
                console.log("Details Page good to go!", res)
                setProduct(res.data.results)
            })
            .catch((err) => {
                console.log("ERROR => details page", err)
            })
    }, [id])

    return (
        <div>
            <h1>Product Details</h1>

            {/* Product Info */}
            <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
            </div>

            <div>
                <button className='btn btn-success' onClick={editButton}>Edit</button>
                <button className='btn btn-danger' onClick={deleteButton}>Delete</button>
            </div>

            <button onClick={homeButton} className='btn btn-outline-primary'>Home</button>
        </div>
    )
}

export default Details