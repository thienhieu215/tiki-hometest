import { useEffect, useState } from 'react'
import { Product } from '../../../components/interface'
import { getUniqueSaleBooksAPI } from '../../../components/api'
import ProductCard from '../prodCard/ProdCard'
import style from './../Home.module.scss'

const UniqueSale = () => {

  const [prodList, setProdList] = useState<Array<Product>>([])

  const getUniqueSaleProds = async (): Promise<any> => {
    let result = await getUniqueSaleBooksAPI()
    setProdList(result.data.data)
  }

  useEffect(() => {
    getUniqueSaleProds()
  }, [])

  return (
    <>
      <div className={style.blockTitle}>SALE ĐỘC NHẤT</div>
      <div style={{ margin: '0px 16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {prodList.map((product, index) => (
          <ProductCard productInfo={product} vertical={false} />
        ))}
      </div>
    </>
  )
}

export default UniqueSale;
