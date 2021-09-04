import style from './TotalPrice.module.scss'

const TotalPrice = ({ totalPrices }: TotalPriceProps) => {

  return (
    <div className={style.totalPrice}>
      <div className={style.total}>
        <div className={style.title}>Tổng cộng</div>
        <div className={style.price}>{totalPrices} đ</div>
      </div>
      <hr className={style.seperator} />
      <button className={style.checkoutBtn}>Thanh toán</button>
    </div>
  );
};

type TotalPriceProps = {
  totalPrices: string,
}

export default TotalPrice;
