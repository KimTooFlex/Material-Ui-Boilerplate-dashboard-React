import React, {Component} from 'react';
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Card, {CardContent} from 'material-ui/Card';
import UserGroups from "./pages/UserGroups";
import Wizard from "./pages/Wizard";
import {subscribe, setState, getState} from "../lib/Redux";
import {put, get} from "../lib/Moing";
import Tabs, { Tab } from 'material-ui/Tabs';
import TabBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import validator from 'validator';
import LocationChooser from "./pages/LocationChooser";

class Layout extends Component {
    state ={
        page: "User Groups"
    }


    componentWillMount() {
      subscribe("Layout",this);
    }



    render() {

        let loggedIn='none';
        let curpage = ( <Login/>);

        //check if logged in
        let account =  get("account");
        if(account!==null) {
             loggedIn='';
            curpage = ( <UserGroups/>);
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
        }

    return (
            <div>
                <AppBar title={"Sikizi Broadcast"} display={loggedIn}/>
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


class Login extends React.Component {
    state = {
        value: 0
    };

    componentWillMount() {
        subscribe("Login", this);
    }

    handleChange = (event, value) => {
         setState("Login",{ value: value });
    };


    componentDidMount() {

    }



    render() {

        return (
            <div className={"row"}>
            <div className={"col-6"} style={{marginLeft: '25%'}}>
                <Card>
                <TabBar position="static">
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="SIGNIN" />
                    <Tab label="SIGNUP" />

                </Tabs>
                </TabBar>

                {this.state.value === 0 && <LoginForm/>}


                {this.state.value ===1 && <Register /> }
                </Card>
                <br/>
                <br/>
                <br/>  <br/>
                <br/>
                <br/>  <br/>
                <br/>
                <br/>  <br/>
                <br/>
                <br/>
            </div>
            </div>);
    }

}


class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    };

    componentWillMount() {
        subscribe("LoginForm", this);
    }


    componentDidMount() {

    }

    handleChange = name => event => {
        let state = this.state;
        state[name]=event.target.value
        setState("LoginForm", state);
    };

    handleLogin = name => event => {
        //
        setState("Loader",{
            visible: true
        })
    };

    render() {
        return (

            <div style={{marginLeft: '10%'}}><br/><br/>
              <div className={"row"}>
                  <div className={"col-4"}>
                   <img src={"img/logo.png"} alt={"Logo"} style={{width: "50%"}} />
                  </div>
                  <div className={"col-8"}>



                      <TextField
                          error={!(validator.isEmail(this.state.email))}
                           style={{width: '70%'}}
                          label={"Enter Email"}
                          onChange={this.handleChange("email")}
                          placeholder={"Enter Email"}
                          type="text"
                          value={this.state.email}
                          inputProps={{step: 300}}/>
                      <br/><br/>
                      <TextField
                          style={{width: '70%'}}
                          id="password"
                          label="Enter Password"
                          type="password"
                          onChange={this.handleChange("password")} placeholder={"Enter Passowrd"}
                          value={this.state.password}  inputProps={{step: 300}}/>
                      <br/>
                      <br/>
                      <Button raised disabled={!(validator.isEmail(this.state.email))} color="accent" onClick={this.handleLogin()}>
                          SIGNIN
                      </Button>
                  </div>

              </div>


                <br/>
                <br/>
                <br/>

            </div>
        )
    }

}


class Register extends React.Component {

    state = {
        page: 1,
        fullName: "",
        email: "",
        phone: "",
        password: "",
        password2: ""
    };


    componentWillMount() {
        subscribe("Register", this);
    }


    handleChange = name => event => {
        let state = this.state;
        state[name]=event.target.value
        setState("Register", state);
    };



   handleRegister = name => event => {
        let state = this.state;
        state.page=2;
        setState("Register", state);
    };


        render() {


            return (
<div>

                { this.state.page === 1 &&  <div style={{marginLeft: '10%'}}><br/><br/>
                    <div className={"row"}>
                  <div className={"col-6"}>
                    <TextField
                        style={{width: '80%'}}
                        label={"Enter Full Name"}
                        onChange={this.handleChange("fullName")}
                        placeholder={"Enter Full Name"} type="text"
                        value={this.state.fullName}  inputProps={{step: 300}}/>
                    <br/><br/>
                      <TextField
                          style={{width: '80%'}}
                          label={"Enter Passoword"}
                          onChange={this.handleChange("password")}
                          placeholder={"Enter Passowrd"} type="password"
                          value={this.state.password}
                          inputProps={{step: 300}}/>
                    <br/><br/>

                    <TextField
                        style={{width: '80%'}}
                        label={"Enter Phone Number"}
                        onChange={this.handleChange("phone")}
                        placeholder={"Enter Phone Number"} type="phone"
                        value={this.state.phone}  inputProps={{step: 300}}/>
                    <br/><br/>
                  </div>

               <div className={"col-6"}>

                   <TextField
                       style={{width: '80%'}}
                       error={true}
                       label={"Enter Email"}
                       onChange={this.handleChange("email")}
                       placeholder={"Enter Email"} type="text"
                       value={this.state.email}  inputProps={{step: 300}} />

                    <br/>
                    <br/>
                    <TextField
                        style={{width: '80%'}}
                        label={"Confirm Passoword"}
                        onChange={this.handleChange("password2")}
                        placeholder={"Confirm Passowrd"} type="password"
                        value={this.state.password2}
                        inputProps={{step: 300}}/>
                     <br/>
                    <br/>
                       <Button raised style={{width: '80%',marginTop: '13px'}} color="accent" onClick={this.handleRegister()}>
                        SIGNUP
                    </Button>
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>}

            {this.state.page === 2 &&  <div style={{marginLeft: '3%'}}><br/><br/>

                <h5>Final Step: Choose Your default location.</h5>
            <br/>
                <LocationChooser/>

                <br/>
                <br/>
                <br/>
                <br/>


            </div>}

</div>

            )
        }
    }


export default Layout;
