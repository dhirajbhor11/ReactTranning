'use client';
import React from "react";

export default function Product({params}:any) {
  const [product, setProduct] = React.useState<any>([]);
  const productId = params.ProductId;

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products/" + productId);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product {productId}</h1>
        <h2>{product.title}</h2>
    </div>
  );
}
