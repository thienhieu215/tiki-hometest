import React, { useEffect, useState } from "react";
import { getUniqueSaleBooksAPI } from '../../../components/api'
import ProductCard from "../prodCard/ProdCard";
import { Product } from '../../../components/interface'
import style from "./SuperSale.module.scss";
import Slider from "react-slick";
import RemoveIcon from '@material-ui/icons/Remove';

const settings = {
  className: `${style.superSale}`,
  arrows: false,
  centerMode: true,
  infinite: false,
  dots: true,
  dotsClass: `${style.dotsClass} slick-dots`,
  centerPadding: "16px",
  slidesToShow: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SuperSale = () => {

  const [prodList, setProdList] = useState<Array<Product>>([])

  const getUniqueSaleProds = async (): Promise<any> => {
    let result = await getUniqueSaleBooksAPI()
    setProdList(result.data.data)
  }

  let carouselItem = []
  for (let i = 0; i < prodList.length; i++) {
    carouselItem.push(
      <ProductCard productInfo={prodList[i]} vertical={true} />
    )
  }

  useEffect(() => {
    getUniqueSaleProds()
  }, [])

  return (
    <div>
      <Slider {...settings}>
        {carouselItem}
      </Slider>
    </div>
  )
}

export default SuperSale;
