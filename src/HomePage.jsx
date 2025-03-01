import React from "react";

const Product = {
    productId: "PROD12345",
    name: "Wireless Headphones",
    price: 199.99,
    featured: true,
    rating: 4.5,
    createdAt: "2025-03-01",
    company: "Sony"
};

function HomePage() {
    return (
        <div className="container mt-4">
            <h3 className="text-center">All Products</h3>
            <div className="row mt-4 mb-4">
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {Array(4).fill(Product).map((item, index) => (
                        <div key={index} className="card" style={{ width: "18rem" }}>
                            <img src="/Images/headphone.png" className="card-img-top" alt="Product" style={{ height: "200px" }} />
                            <div className="card-body">
                                <p className="card-text">
                                    Name: {item.name} <br />
                                    Price: {item.price} <br />
                                    Rating: {item.rating} <br />
                                    CreatedAt: {item.createdAt} <br />
                                    Company: {item.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

