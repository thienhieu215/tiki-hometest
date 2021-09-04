import { useState } from 'react';
import { TStore } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { increase, reduce, removeFromCart, clearCart } from '../../store/slices/CartSlice'
import ItemInCart from './components/cartItem/CartItem';
import OrderSummary from './components/orderSummary/OrderSummary';
import TotalPrice from './components/totalPrice/TotalPrice';
import { CartItem } from '../../components/interface';
import style from './Cart.module.scss'


const Order = () => {

  const [openDialogRemove, setOpenDialogRemove] = useState<boolean>(false);

  const dispatch = useDispatch()
  const items: Array<CartItem> = useSelector((state: TStore) => state.cartReducer.cartItems);
  const shipping: number = useSelector((state: TStore) => state.cartReducer.shipping);

  const calculateTotalPrices = (): number => {
    let temp: number = 0
    for (let i = 0; i < items.length; i++) {
      temp += items[i].price * items[i].quantity
    }
    return temp
  }

  const priceToString = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const increaseQuantity = (product: CartItem): void => {
    dispatch(increase(product))
  }

  const reduceQuantity = (product: CartItem): void => {
    dispatch(reduce(product))
  }

  const removeItem = (product: CartItem): void => {
    dispatch(removeFromCart(product))
    setOpenDialogRemove(false)
  }

  return (
    <div className={style.cartPg}>
      <div className={style.pageTitle}>Giỏ hàng</div>
      <div className={style.chitietdonhang}>Chi tiết đơn hàng</div>
      <div className={style.list}>
        {items.map((product, index) => (
          <ItemInCart productInfo={product} increase={increaseQuantity} reduce={reduceQuantity} />
        ))}
        <OrderSummary
          totalPricesWithShipping={priceToString(shipping + calculateTotalPrices())}
          totalPrices={priceToString(calculateTotalPrices())}
          shipping={priceToString(shipping)} />
      </div>
      <TotalPrice totalPrices={priceToString(shipping + calculateTotalPrices())} />
    </div>
  )
}

export default Order;
