import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { getUniqueSaleBooksAPI } from '../../../components/api'
import ProductCard from "../prodCard/ProdCard";
import { Product } from '../../../components/interface'
import style from "./SuperSale.module.scss";


const SuperSale = () => {

  const [prodList, setProdList] = useState<Array<Product>>([])

  const getUniqueSaleProds = async (): Promise<any> => {
    let result = await getUniqueSaleBooksAPI()
    setProdList(result.data.data)
  }

  useEffect(() => {
    getUniqueSaleProds()
  }, [])

  let carouselItem = []
  for (let i = 0; i < prodList.length; i++) {
    carouselItem.push(
      <Carousel.Item>
        <div>
          <ProductCard productInfo={prodList[i]} />
        </div>
      </Carousel.Item>
    )
  }

  return (
    <>
      <div >
        <Carousel className={style.carouselContainer} controls={false}>
          {carouselItem}
        </Carousel>
      </div>
    </>
  )
}

export default SuperSale;
