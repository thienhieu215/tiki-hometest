import React, { useState } from 'react';
import style from './Cart.module.scss'

const OrderSummary = ({ totalPricesWithShipping, totalPrices, shipping }: OrderSummaryProps) => {

  return (
    <div className={style.orderSummary}>
      <div className={style.title}>
        <div>Tạm tính</div>
        <div className={style.price}>{totalPrices} đ</div>
      </div>
      <div className={style.title}>
        <div>Phí vận chuyển</div>
        <div className={style.price}>{shipping} đ</div>
      </div>
      <div className={style.title}>
        <div>Tổng cộng</div>
        <div className={style.price}>{totalPricesWithShipping} đ</div>
      </div>
    </div>
  );
};

type OrderSummaryProps = {
  totalPricesWithShipping: string,
  totalPrices: string,
  shipping: string
}

export default OrderSummary;
