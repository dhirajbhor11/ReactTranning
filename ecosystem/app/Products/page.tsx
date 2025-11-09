'use client';
import Link from "next/link";
import React from "react";

export default function Products() {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`Products/${product.id}`}> {product.title} - ${product.price} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Products/123
