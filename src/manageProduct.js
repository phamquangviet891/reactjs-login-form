import React, { useState, useEffect } from 'react';
import product from "../src/product.json"

function ManageProduct() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
        // Đọc danh sách sản phẩm từ file db.json
        setProducts(product.products);
    }, []);

    const handleViewDetail = (productId) => {
        // Xử lý hiển thị chi tiết sản phẩm với ID tương ứng
        console.log('View detail of product with ID:', productId);
        const product = products.find((product) => product.id === productId);
        setSelectedProduct(product);
    };

    const handleEdit = (productId) => {
        // Xử lý chuyển đến trang chỉnh sửa sản phẩm với ID tương ứng
        console.log('Edit product with ID:', productId);
    };

    const handleDelete = (productId) => {
        // Xử lý xóa sản phẩm với ID tương ứng
        console.log('Delete product with ID:', productId);
    };

    const handleCloseDetail = () => {
        // Đóng form chi tiết sản phẩm và đặt lại state
        setSelectedProduct(null);
    };
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
                                <button onClick={() => handleViewDetail(product.id)}>
                                    View detail
                                </button>
                                <button onClick={() => handleEdit(product.id)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Hiển thị form chi tiết sản phẩm nếu có */}
            {selectedProduct && (
                <div>
                    <h2>Product Details</h2>
                    <p>ID: {selectedProduct.id}</p>
                    <p>Name: {selectedProduct.name}</p>
                    <p>Price: {selectedProduct.price}</p>
                    <button onClick={handleCloseDetail}>Close</button>
                </div>
            )}
        </div>
    );
}

export default ManageProduct;