import React from 'react'
import s from "./style.module.css"

export default function ProductElement({id, images, title, price, discountPercentage,deleteProduct }) {
  return (
    <div className={s.card}>
        <div className={s.image}>
            <img className={s.img} src={images[0]} alt="" />
        </div>
        <p className={s.title}>{title}</p>
        <div className={s.price}>
            <p className={s.price_normal}>{price} €</p>
            <p className={s.price_discount}>
                {(price-price*discountPercentage/100).toFixed(2) > 0
                ? (price-price*discountPercentage/100).toFixed(2) + '€'
                : 'нет в наличии'}
            </p>
        </div>
        <div className={s.button}>
            <button className={s.btn}  onClick={() => deleteProduct(id)}>Удалить</button>
        </div>
        
    </div>
  )
}
