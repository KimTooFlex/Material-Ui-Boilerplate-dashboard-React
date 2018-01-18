import React, {Component} from 'react';
import  Layout from "./layout/Layout";
import red from 'material-ui/colors/red';
import pink from 'material-ui/colors/pink';
import green from 'material-ui/colors/lightGreen';
import blueGray from 'material-ui/colors/blueGrey';
import { createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {put,get} from "./lib/Moing";

class App extends Component {

    render() {
        const defaultTheme = createMuiTheme()

// All the following keys are optional.
// We try our best to provide a great default value.
        const theme = createMuiTheme({
            palette: {
                 primary: {
                    light: green[300],
                    main: blueGray[900],
                    dark: green[700],
                    contrastText: defaultTheme.palette.getContrastText(blueGray[900]),
                } ,
                secondary: {
                    light: green[600],
                    main: green[600],
                    dark:green[700],
                    contrastText: defaultTheme.palette.getContrastText(green[700]),
                },
                error: red.A400,
            },
        });

        put("name","kimtoo");
        alert(JSON.stringify(get("name")));

        return (



            <MuiThemeProvider theme={theme}>
                <Layout />
            </MuiThemeProvider>
        );
    }
}


export default App;
