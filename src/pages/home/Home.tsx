import Banners from './banners/Banners'
import FlashSale from './flashSale/FlashSale';
import UniqueSale from './uniqueSale/UniqueSale';
import SuperSale from './superSale/SuperSale';
import style from './Home.module.scss'

const Home = () => {

  return (
    <div className={style.homePage}>
      <Banners />
      <UniqueSale />
      <SuperSale />
      <FlashSale />
    </div>
  )
}

export default Home;
