import React from 'react'
import classes from './NavigationItems.css'

const navigationItems = (props) =>{
    return(
        <ul className={classes.Navigation}>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
    );
};

export default navigationItems;