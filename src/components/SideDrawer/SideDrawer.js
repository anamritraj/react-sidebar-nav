import React from 'react'
import Logo from '../Logo/Logo'
import classes from './SideDrawer.css'

import Backdrop from '../../UI/Backdrop/backdrop'
import Aux from '../../UI/_Aux/_Aux'
import NavigationItems from './../NavigationItems/NavigationItems'

const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Aux>
            <div className={attachedClasses.join(' ')} >
                <Logo/>
                <NavigationItems/>
            </div>
            <Backdrop show={props.open} clicked={props.closed}/>
        </Aux>
    );
};

export default sideDrawer;