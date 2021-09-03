import React from 'react'
import style from './ProdCard.module.scss'
import { useDispatch } from "react-redux";
import { Product, CartItem } from '../../../components/interface';
import { addToCart } from '../../../store/slices/CartSlice'
import StarRating from './StarRating';


const ProductCard = ({ productInfo, vertical }: ProductCardProps) => {

  const dispatch = useDispatch()

  const addItemToCart = (product: Product): void => {
    let obj: CartItem = { ...product, quantity: 1 }
    dispatch(addToCart(obj))
  }

  return (
    <div className={vertical ? style.YprodCard : style.XprodCard} onClick={() => addItemToCart(productInfo)}>
      <div className={style.thumbnail}>
        <img className={style.img} src={productInfo.thumbnail_url} />
        {productInfo.badges_new[1] &&
          <img className={style.freeShipLabel}
            width={productInfo.badges_new[1].icon_width}
            height={productInfo.badges_new[1].icon_height}
            src={productInfo.badges_new[1].icon} />
        }
      </div>
      <div className={style.info}>
        {productInfo.badges_new[0] &&
          <div>
            <img className={style.tikiNowLabel}
              width={productInfo.badges_new[0].icon_width}
              height={productInfo.badges_new[0].icon_height}
              src={productInfo.badges_new[0].icon} />
          </div>
        }
        <div className={style.prodName}>{productInfo.name}</div>
        <div style={{ display: 'flex' }}>
          <StarRating rate={productInfo.rating_average}/>
          {/* <div>{}</div> */}
          &nbsp;
          <div className={style.reviewCount}>({productInfo.review_count})</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className={style.price}>{productInfo.price} đ</div>
          <div className={style.sale}>-{productInfo.discount_rate}%</div>
        </div>
        <div className={style.oldPrice}>{productInfo.list_price} đ</div>
      </div>
    </div>
  )
}

type ProductCardProps = {
  productInfo: Product,
  vertical: boolean
}

export default ProductCard
