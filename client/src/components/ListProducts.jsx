import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    const [deleted, setDeleted] = useState(false);

    const deleteButton = (event, id) => {
        event.preventDefault();

        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res) => {
                // log and test!
                console.log("Delete res good to go!", res)
                setDeleted(!deleted)
            })
            .catch((err) => {
                console.log("ERROR => delete res", err)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                // log and test!
                console.log("Product List good to go!", res.data.results)
                setProducts(res.data.results)
            })
            .catch((err) => {
                console.log("ERROR => product list", err)
            })
    }, [deleted])

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {
                    products.map((product, idx) => {
                        return (
                            <div>
                                <Link to={`/${product._id}`} key={idx}>
                                    <p className='product-list-item'>
                                        {product.title}
                                    </p>
                                </Link>

                                <button className='btn btn-danger' onClick={(event) => { deleteButton(event, product._id) }}>
                                    Delete
                                </button>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListProducts