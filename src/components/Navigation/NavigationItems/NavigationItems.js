import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems  = (props) => (

    <ul className={classes.NavigationItems}>
        <NavigationItem  link='/' exact>Burger</NavigationItem>
        <NavigationItem link="/orders">Order</NavigationItem>

    </ul>
);


export default NavigationItems;
