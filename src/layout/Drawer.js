import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import {subscribe, setState, getState,updateState} from "../lib/Redux";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

import Icon1 from 'material-ui-icons/Home';
import Icon2 from 'material-ui-icons/VerifiedUser';

class myDrawer extends Component {

    state ={
        visible: false
    }


    componentWillMount() {
       subscribe("Drawer",this);
    }





    toggleDrawer = (side, open) => () => {

        setState("Drawer",{
            [side]: open,
        });

    };


    handleChange = name => event => {
        let _state = getState("AppBar");
        _state.page= name;
        setState("AppBar", _state);
        setState("Layout",{page: name});

    };

    render() {
        let display= {};
        display[true]='';
        display[false]='none';

        return (

            <Drawer open={this.state.visible} onClose={this.toggleDrawer('visible', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('visible', false)}
                    onKeyDown={this.toggleDrawer('visible', false)}
                >
                    <img src={"img/banner.jpg"} alt={"Loading Banner..."} style={{width:"300px",height: "100px"}} />


                    <List style={{width: '300px'}}>
                        <ListItem button onClick={this.handleChange("Dashboard")}>
                            <ListItemIcon>
                                <i className="fas fa-chart-pie"></i>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button onClick={this.handleChange("User Groups")}>
                            <ListItemIcon>
                                <i className="fas fa-users"></i>
                            </ListItemIcon>
                            <ListItemText primary="User Groups" />
                        </ListItem>
                        <ListItem button onClick={this.handleChange("Locations")}>
                            <ListItemIcon>
                                <i className="fas fa-map-marker"></i>
                            </ListItemIcon>
                            <ListItemText primary="Locations" />
                        </ListItem>
                        <ListItem button onClick={this.handleChange("Contacts")}>
                            <ListItemIcon>
                                <i className="fas fa-phone"></i>
                            </ListItemIcon>
                            <ListItemText primary="Contacts" />
                        </ListItem>
                        <ListItem button onClick={this.handleChange("Outbox")}>
                            <ListItemIcon>
                                <i className="fas fa-sign-out-alt"></i>
                            </ListItemIcon>
                            <ListItemText primary="Outbox" />
                        </ListItem>
                        <ListItem button onClick={this.handleChange("Inbox")}>
                            <ListItemIcon>
                                <i className="fas fa-inbox"></i>
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        {/*<ListItem button onClick={this.handleChange("Settings")}>*/}
                            {/*<ListItemIcon>*/}
                                {/*<i className="fas fa-cog"></i>*/}
                            {/*</ListItemIcon>*/}
                            {/*<ListItemText primary="Settings" />*/}
                        {/*</ListItem>*/}
                    </List>
                    <Divider />
                    <List>
                        <ListItem button  onClick={this.handleChange("Import Contacts")}>
                            <ListItemText primary="Import Contacts" />
                        </ListItem>
                        <ListItem button  onClick={this.handleChange("Export Contacts")}>
                            <ListItemText primary="Export Contacts" />
                        </ListItem>
                        <ListItem button  onClick={this.handleChange("User Groups")}>
                            <ListItemText primary="My Profile" />
                        </ListItem>
                        <ListItem button   onClick={this.handleChange("logout")}>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>



                </div>
            </Drawer>
        );
    }
}


export default myDrawer;
