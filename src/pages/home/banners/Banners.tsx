import React, { useEffect, useState } from "react";
import { getBannersAPI } from "../../../components/api";
import Carousel from 'react-bootstrap/Carousel'
import { Banner } from '../../../components/interface'

const Banners = () => {

  const [banners, setBanners] = useState<Array<Banner>>([])

  const getBanners = async (): Promise<any> => {
    let result = await getBannersAPI()
    setBanners(result.data.row1)
  }

  let carouselItem = []
  for (let i = 0; i < banners.length; i++) {
    carouselItem.push(
      <Carousel.Item>
        <img className="d-block w-100" src={banners[i].mobile_url} alt="Slide" />
      </Carousel.Item>
    )
  }

  useEffect(() => {
    getBanners()
  }, [])

  return (
    <>
      <Carousel controls={false}>
        {carouselItem}
      </Carousel>
    </>
  )
}

export default Banners;
