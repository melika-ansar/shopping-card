import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../ProductsContainer/Products';
import { getProducts } from '../Services/Services';
import Modal from '../Modal/Modal';

interface Iproduct {
  image: string;
  name: string;
  id: number;
  price: number;
}

export default function Home() {
  const [Productss, setProductss] = useState<Iproduct>([]);

  useEffect(() => {
    getProducts().then(response => {
      setProductss(response);
    });
  }, []);
  return (
    <div className='relative'>
      <Header />
      <Products />
      <Modal/>
    </div>
  );
}
