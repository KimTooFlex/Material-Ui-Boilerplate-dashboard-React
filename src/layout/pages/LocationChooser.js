import React, {Component} from 'react';
import {setState, subscribe} from "../../lib/Redux";
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Input from 'material-ui/Input';
import swal from 'sweetalert2';

class LocationChooser extends Component {
    state = {
        countries: ["Kenya", "Uganda", "Tanzania"],
        country: "",

    };
    handleCountryChange = name => event => {
        let _state = this.state;
        _state.country = event.target.value;
        setState("LocationChooser", _state);
    };
    handleNext = name => event => {
        if (true) {
            setState("Wizard",
                {
                    activeSteps: {
                        activeStep: 3
                    }
                })
        } else {
            swal("Oops!", "Empty sms", "error");
        }
    };
    handlePrev = name => event => {
        setState("Wizard",
            {
                activeSteps: {
                    activeStep: 1
                }
            })

    };

    componentWillMount() {
        subscribe("LocationChooser", this);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"col-12"} style={{textAlign: "center", width: '100%'}}>

                <br/>
                <br/>
                <br/>
                <div className={"row"}>
                    <div className={"col-3"} style={{textAlign: " "}}>
                        <label>COUNTRY</label> <br/>
                        <Select
                            value={this.state.country}
                            onChange={this.handleCountryChange()}
                            input={<Input name="type" id="type"/>}
                        >

                            <MenuItem value={1}>Kenya</MenuItem>
                            <MenuItem value={2}>Uganda</MenuItem>
                            <MenuItem value={3}>Tanzania</MenuItem>

                        </Select>
                    </div>
                    <div className={"col-3"} style={{textAlign: "left"}}>
                        <label>COUNTY</label> <br/>
                        <Select
                            value={this.state.country}
                            onChange={this.handleCountryChange()}
                            input={<Input name="type" id="type"/>}
                        >

                            <MenuItem value={1}>Kenya</MenuItem>
                            <MenuItem value={2}>Uganda</MenuItem>
                            <MenuItem value={3}>Tanzania</MenuItem>

                        </Select>
                    </div>
                    <div className={"col-3"} style={{textAlign: "left"}}>
                        <label>SUB-COUNTY</label> <br/>
                        <Select
                            value={this.state.country}
                            onChange={this.handleCountryChange()}
                            input={<Input name="type" id="type"/>}
                        >

                            <MenuItem value={1}>Kenya</MenuItem>
                            <MenuItem value={2}>Uganda</MenuItem>
                            <MenuItem value={3}>Tanzania</MenuItem>

                        </Select>
                    </div>
                    <div className={"col-3"} style={{textAlign: "left"}}>
                        <label>WARD</label> <br/>
                        <Select
                            value={this.state.country}
                            onChange={this.handleCountryChange()}
                            input={<Input name="type" id="type"/>}
                        >

                            <MenuItem value={1}>Kenya</MenuItem>
                            <MenuItem value={2}>Uganda</MenuItem>
                            <MenuItem value={3}>Tanzania</MenuItem>

                        </Select>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <div className={"col"}>
                    <Button raised color="accent" onClick={this.handlePrev()}>
                        Prev
                    </Button>
                    &nbsp;
                    <Button raised color="accent" onClick={this.handleNext()}>
                        Next
                    </Button>
                </div>
            </div>)
    }
}


export default LocationChooser;
