import React, { Component } from 'react';
import Aux from '../Auxilliary/Auxilliary';
import classes from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state={

        showSideDrawer:false
    }

    backdropCloseHandler = () => {
        this.setState({
            showSideDrawer:false
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer:!prevState.showSideDrawer};
        });
    }

    render(){
    return(
        <Aux>
        <div>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer closed={this.backdropCloseHandler} open={this.state.showSideDrawer}/>
        </div>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
    );

}

}
export default Layout;