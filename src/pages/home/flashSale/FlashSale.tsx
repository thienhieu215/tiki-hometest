import { useEffect, useState } from 'react';
import { getFlashSaleBooksAPI } from '../../../components/api'
import Tabs from './tabs/Tabs'
import { Product } from '../../../components/interface';
import style from './../Home.module.scss'

const FlashSale = () => {

  const [flashSaleProds, setFlashSaleProds] = useState<Array<Product>>([])

  const getFlashSaleProds = async (): Promise<any> => {
    let result = await getFlashSaleBooksAPI()
    setFlashSaleProds(result.data.data)
  }

  //  get products based on timestamp
  // const getFlashSaleProds = async (): Promise<any> => {
  //   let result = await getFlashSaleBooksAPI(timeStamp[currentTab])
  //   setFlashSaleProds(result.data.data)
  // }

  useEffect(() => {
    getFlashSaleProds()
  }, [])

  return (
    <>
      <div className={style.blockTitle}>FLASH SALE SIÊU TỐC</div>
      <Tabs productList={flashSaleProds} />
    </>
  )
}

export default FlashSale
