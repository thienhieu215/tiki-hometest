import StarRateIcon from '@material-ui/icons/StarRate';
import style from './ProdCard.module.scss'

const StarRating = ({rate}: StarRatingProps) => {

  return (
    <>
      <div className={style.starRating}>
        <div className={style.backStars}>
          <StarRateIcon className={style.star}/>
          <StarRateIcon className={style.star}/>
          <StarRateIcon className={style.star}/>
          <StarRateIcon className={style.star}/>
          <StarRateIcon className={style.star}/>

          <div className={style.frontStars} style={{width: `${rate*20}%`}}>
            <StarRateIcon className={style.star}/>
            <StarRateIcon className={style.star}/>
            <StarRateIcon className={style.star}/>
            <StarRateIcon className={style.star}/>
            <StarRateIcon className={style.star}/>
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
