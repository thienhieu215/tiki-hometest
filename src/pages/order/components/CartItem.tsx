import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import { Product, CartItem } from '../../../components/interface';
import style from './Cart.module.scss'

const ItemInCart = ({ productInfo, increase, reduce,
  // showRemove
}: ItemInCartProps) => {

  const priceToString = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <>
      <div className={style.card}>
        <div className={style.prod}>
          <div className={style.itemInfo}>
            <img className={style.img} src={productInfo.thumbnail_url} />
            <div className={style.prodInfo}>
              <h4 className={style.title}>
                <a>{productInfo.name}</a>
              </h4>
              <div className={style.allPrice}>
                <div className={style.price}>{priceToString(productInfo.price)} đ</div>
                <div className={style.oldPrice}>{priceToString(productInfo.list_price)} đ</div>
              </div>
              <div className={style.btnGroup}>
                <div className={style.reduceBtn}>
                <RemoveIcon className={style.reduce} onClick={() => reduce(productInfo)} />
                </div>
                &nbsp;
                <div className={style.quantityBtn}>
                  <div className={style.quantity}>{productInfo.quantity}</div>
                </div>
                &nbsp;
                <div className={style.addBtn}>
                  <AddIcon className={style.add} onClick={() => increase(productInfo)} />
                </div>
              </div>
            </div>
          </div>
          <div className={style.removeItem}>
            <ClearIcon className={style.icon} />
          </div>
        </div>
        <hr className={style.seperator} />
      </div>
    </>
  )
}

type ItemInCartProps = {
  productInfo: CartItem,
  increase: (e: CartItem) => void,
  reduce: (e: CartItem) => void,
  // showRemove: (e: CartItem) => void
}

export default ItemInCart
