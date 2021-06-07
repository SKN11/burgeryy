import React from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assets/Images/burger-logo.png'

const Logo  = (props) => (
    

        <div className={classes.Logo}>
            <img src={burgerLogo} alt ="Burgeryy"/>
        </div>
    
);


export default Logo;