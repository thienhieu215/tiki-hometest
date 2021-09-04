import { useEffect, useState } from "react";
import { getUniqueSaleBooksAPI } from '../../../components/api'
import ProductCard from "../prodCard/ProdCard";
import { Product } from '../../../components/interface'
import slideStyle from "./SuperSale.module.scss";
import Slider from "react-slick";

const settings = {
  className: `${slideStyle.slide}`,
  arrows: false,
  centerMode: true,
  infinite: false,
  dots: true,
  dotsClass: `${slideStyle.dotsClass} slick-dots`,
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
    <div className={slideStyle.superSale}>
      <div className={slideStyle.title}>SIÊU SALE</div>
      <Slider {...settings}>
        {carouselItem}
      </Slider>
    </div>
  )
}

export default SuperSale;
