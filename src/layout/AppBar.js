import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

import {subscribe,setState,getState} from "../lib/Redux";

class MyAppBar extends Component {

    state ={
        title: "AppBar",
        page: "User Groups",
        loggedIn: false
    }

    componentWillMount() {
         subscribe("AppBar",this);
         setState("AppBar", {title: this.props.title })
    }



    toggleDrawer() {
         let _state = getState("Drawer");
         _state.visible=!_state.visible;
         setState("Drawer", _state);
    }

    onNewMessage = () => event => {
        let _state = getState("AppBar");
        _state.page= "Wizard";
        setState("AppBar", _state);
        setState("Layout",{page: "Wizard"});
    };

    render() {

        return (
            <div className={{width: '100%'}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={ {
                            marginLeft: -12,
                            marginRight: 20,
                        }}  onClick={this.toggleDrawer} color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography className={{
                            flex: 1,
                        }} type="title" color="inherit"  >
                            {this.state.title +"  - "+ this.state.page}
                        </Typography>
                        <div className={"col"} style={{textAlign:"right"}}>  <Button  onClick = {this.onNewMessage()}  color="contrast">NEW MESSAGE</Button></div>
                    </Toolbar>

                </AppBar>
            </div>
        );
    }
}



export default MyAppBar;
