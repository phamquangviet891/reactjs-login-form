import React, { useState, useEffect } from 'react';
import product from "../src/product.json"

function ManageProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Đọc danh sách sản phẩm từ file db.json
        setProducts(product.products);
    }, []);

    return (
        <div>
            <h1>Manage Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button>View detail</button>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageProduct;