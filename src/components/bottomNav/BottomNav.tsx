import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import style from './BottomNav.module.scss'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "#81818A",
    "&$selected": {
      color: "#FC820A"
    }
  },
  selected: {}
};

const BottomNav = () => {

  const [value, setValue] = useState<Number>(0)

  return (
    <>
      <BottomNavigation
        className={style.bottomNav}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction classes={{ root: style.BottomNavigationAction, selected: style.selected }} component={Link} to="/" label="Trang chủ" icon={<HomeIcon />} />
        <BottomNavigationAction classes={{ root: style.BottomNavigationAction, selected: style.selected }} component={Link} to="/order" label="Giỏ hàng" icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </>
  )
}

export default withStyles(styles)(BottomNav);
