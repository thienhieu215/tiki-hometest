import React from 'react'
import style from './ProdCard.module.scss'
import StarRateIcon from '@material-ui/icons/StarRate';

const StarRating = ({rate}: StarRatingProps) => {

  return (
    <>
      <div className={style.starRating}>
        <div className={style.backStars}>
          <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
          <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
          <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
          <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
          <i aria-hidden="true"><StarRateIcon className={style.star}/></i>

          <div className={style.frontStars} style={{width: `${rate*20}%`}}>
            <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
            <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
            <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
            <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
            <i aria-hidden="true"><StarRateIcon className={style.star}/></i>
          </div>
        </div>
      </div>
    </>
  )
}

type StarRatingProps = {
  rate: number
}

export default StarRating