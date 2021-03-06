import React from 'react'
import Logo from '../../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import NavigationItems from './NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'

function toolbar(props) {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle toggled={props.menuClicked}/>
      <div className={classes.Logo}>
      <Logo/>
      </div>
      <nav className={classes.DesktopOnly}>
      <NavigationItems/>
      </nav>
    </header>
  )
}

export default toolbar
