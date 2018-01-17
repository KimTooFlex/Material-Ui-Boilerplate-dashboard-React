import React, {Component} from 'react';
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Card, {CardContent} from 'material-ui/Card';
import UserGroups from "./pages/UserGroups";
import Wizard from "./pages/Wizard";
import {subscribe, setState, getState} from "../lib/Redux";

//appbar
//sideMenu
//Container


class Layout extends Component {
    state ={
        page: "User Groups"
    }


    componentWillMount() {
      subscribe("Layout",this);
    }



    render() {

       let curpage = ( <UserGroups/>);


       switch (this.state.page) {
           case "Wizard":
               curpage = ( <Wizard/>);
               break;

           case "Dashboard":
               curpage = (<h1>Dashboard comming sooon</h1>);
               break;
           case "User Groups":
               curpage = ( <UserGroups/>);
               break;

           default:

               break;

       }



        return (
            <div>
                <AppBar title={"Sikizi Broadcast"}/>
              <div className={"container"} style={{width: "100%"}}>
                  <div className={"row"}>
                     <Drawer/>
                      <div className={"col"}>
                        <br/>
                        <Card>
                            <CardContent>
                                {curpage}
                            </CardContent>
                        </Card>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default Layout;
