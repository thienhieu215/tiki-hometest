import { useState, useEffect } from 'react';
import Tabs from './Tabs'
import style from './../Home.module.scss'

const FlashSale = () => {

  return (
    <>
      <div className={style.blockTitle}>FLASH SALE SIÊU TỐC</div>
      <Tabs />
    </>
  )
}

export default FlashSale
