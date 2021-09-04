import { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import style from './BottomNav.module.scss'


const BottomNav = () => {

  const [currentPage, setCurrentPage] = useState<Number>()

  useEffect(() => {
    if (window.location.pathname === '/') {
      setCurrentPage(0)
    } else if (window.location.pathname === '/order') {
      setCurrentPage(1)
    }
  }, [])

  return (
    <>
      <BottomNavigation
        className={style.bottomNav}
        value={currentPage}
        onChange={(event, newValue) => { setCurrentPage(newValue) }}
        showLabels
      >
        <BottomNavigationAction classes={{ root: style.BottomNavigationAction, selected: style.selected }} component={Link} to="/" label="Trang chủ" icon={<HomeIcon />} />
        <BottomNavigationAction classes={{ root: style.BottomNavigationAction, selected: style.selected }} component={Link} to="/order" label="Giỏ hàng" icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </>
  )
}

export default BottomNav;
