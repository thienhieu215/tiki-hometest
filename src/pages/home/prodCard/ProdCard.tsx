import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Product, CartItem } from '../../../components/interface';
import { addToCart } from '../../../store/slices/CartSlice'
import StarRating from './StarRating';
import Dialog from './../../../components/dialogs/ConfirmDialog'
import style from './ProdCard.module.scss'


const ProductCard = ({ productInfo, vertical }: ProductCardProps) => {

  const [openDialogSuccess, setOpenDialogSuccess] = useState<boolean>(false);
  const dispatch = useDispatch()

  const priceToString = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const addItemToCart = (product: Product): void => {
    let obj: CartItem = { ...product, quantity: 1 }
    dispatch(addToCart(obj))
    setOpenDialogSuccess(true)
  }

  return (
    <>
      <Dialog agreeContent='' closeContent='Xác nhận'
        content='Sản phẩm đã được thêm vào giỏ hàng.' isConfirmDialog={false}
        handleClose={() => setOpenDialogSuccess(false)} isOpen={openDialogSuccess}
      />
      <div className={vertical ? style.YprodCard : style.XprodCard} onClick={() => addItemToCart(productInfo)}>
        <div className={style.thumbnail}>
          <img className={style.img} src={productInfo.thumbnail_url} alt={style.prodName} />
          {productInfo.badges_new[1] &&
            <img className={style.freeShipLabel}
              width={productInfo.badges_new[1].icon_width}
              height={productInfo.badges_new[1].icon_height}
              src={productInfo.badges_new[1].icon} alt={productInfo.badges_new[1].code} />
          }
        </div>
        <div className={style.info}>
          {productInfo.badges_new[0] &&
            <div>
              <img className={style.tikiNow}
                width={productInfo.badges_new[0].icon_width}
                height={productInfo.badges_new[0].icon_height}
                src={productInfo.badges_new[0].icon} alt={productInfo.badges_new[0].code} />
            </div>
          }
          <div className={style.prodName}>{productInfo.name}</div>
          <div style={{ display: 'flex' }}>
            <StarRating rate={productInfo.rating_average} />
            &nbsp;
            <div className={style.reviewCount}>({productInfo.review_count})</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={style.price}>{priceToString(productInfo.price)} đ</div>
            <div className={style.sale}>-{productInfo.discount_rate}%</div>
          </div>
          <div className={style.oldPrice}>{priceToString(productInfo.list_price)} đ</div>
        </div>
      </div>
    </>
  )
}

type ProductCardProps = {
  productInfo: Product,
  vertical: boolean
}

export default ProductCard
