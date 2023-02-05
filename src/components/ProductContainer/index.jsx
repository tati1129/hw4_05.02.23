import React from 'react'
import  { useEffect, useState } from 'react'
import ProductElement from '../ProductElement';
import Calculation from "../Calculation"
import s from "./style.module.css"

export default function ProductContainer() {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    (async() => {
      const resp = await fetch("https://dummyjson.com/products")
      const data = await resp.json()
      setProducts(data.products)
    })()
  }, [])

  const deleteProduct = (delId) => setProducts(products.filter(({id}) => id !== delId));
  return (
    <div>
        <div className={s.contain}>
          {
            products.map((product) => <ProductElement key={product.id} {...product}
            deleteProduct={deleteProduct}
            />)
          }
        </div>
        <div className={s.info}>
          <Calculation products={products}/>
        </div>
    </div>
  )
}
