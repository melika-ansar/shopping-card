import React from 'react'
import ProductCard from './Products/ProductCard/ProductCard'

export default function Products() {
  return (
    <div className="bg-gray-900 h-full grid grid-cols-4  justify-center gap-5 px-20 py-24 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
