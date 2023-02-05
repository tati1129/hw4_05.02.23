import React from 'react'
import s from "./style.module.css"

export default function Calculation({products}) {
  const totalSum = products.reduce((prev, {price}) => prev + price, 0);
  const discountSum = products.reduce((prev, {price, discountPercentage}) => prev + +(price - price*discountPercentage/100), 0);
  return (
    <div className={s.info}>
        <p>Всего товаров: {products.length} ед.</p>
        <p>Общая сумма (без скидки): {totalSum}  €</p>
        <p>Общая сумма (со скидкой): {discountSum.toFixed(2)}  €</p>
    </div>
  )
}
