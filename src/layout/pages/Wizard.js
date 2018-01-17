import React, {Component} from 'react';
import {setState, subscribe} from "../../lib/Redux";
import Button from 'material-ui/Button';
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import swal from 'sweetalert2';
import {ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class Wizard extends Component {
    state = {
        activeSteps: {
            activeStep: 0
        }
    }
    reset = () => {
        setState("Wizard", {
            activeSteps: {
                activeStep: 0
            }
        })
    }

    componentWillMount() {
        subscribe("Wizard", this);
    }

    getSteps() {
        return ['Alert Type', 'Compose Message', 'Choose Tags & User Groups'];
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return 'Choose Alert Type...';
            case 1:
                return 'The SMS you want to broadcast...';
            case 2:
                return 'Choose user groups/Tags';
            default:
                return 'Unknown step';
        }
    }

    render() {

        let page = (<MessageType/>);

        if (this.state.activeSteps.activeStep === 1) {
            page = (<Message/>);
        }

        if (this.state.activeSteps.activeStep === 2) {
            page = (<Tags/>);
        }

        if (this.state.activeSteps.activeStep === 3) {

        }


        return (
            <div>
                <div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Sikizi</li>
                                    <li className="breadcrumb-item active" aria-current="page">SMS</li>
                                    <li className="breadcrumb-item"> Create Broadcast</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                    <div className={"row"}>
                        <div className={"col"}>

                        </div>
                        <div className={"col"}>

                        </div>
                    </div>
                    <hr/>
                    <div className={"row"}>
                        <div className={"col"}>
                            <Stepper activeStep={this.state.activeSteps.activeStep}>
                                {this.getSteps().map((label, index) => {

                                    let completed = true;
                                    if (index > this.state.activeSteps.activeStep - 1) {
                                        completed = false;
                                    }

                                    return (
                                        <Step key={label} completed={completed}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                        </div>
                    </div>
                    <div className={"row"}>
                        {page}
                    </div>
                </div>
            </div>
        );
    }
}



class MessageType extends React.Component {
    state = {
        sms_type: "Warning"
    };
    handleChange = event => {
        setState("MessageType", {sms_type: event.target.value})
    };
    handleNext = name => event => {

        setState("Wizard",
            {
                activeSteps: {
                    activeStep: 1
                }
            })
    };

    componentWillMount() {
        subscribe("MessageType", this);
    }

    render() {
        return (

            <div className={"col-12"} style={{textAlign: "center", width: '100%'}}>
                <br/>
                <br/>
                <h4>
                    Choose Message Type
                </h4>
                <br/>
                <Select
                    value={this.state.sms_type}
                    onChange={this.handleChange}
                    input={<Input name="type" id="type"/>}
                >

                    <MenuItem value={"Warning"}>Warning</MenuItem>
                    <MenuItem value={"Information"}>Informaton</MenuItem>
                    <MenuItem value={"Danger"}>Danger</MenuItem>

                </Select>
                <br/> <br/>
                <Button raised color="accent" onClick={this.handleNext()}>
                    Next
                </Button>

            </div>
        )
    }

}


class Message extends React.Component {
    state = {
        sms: ""
    };
    handleChange = name => event => {
        setState("Message", {sms: event.target.value})
    };
    handleNext = name => event => {
        if (this.state.sms.trim().length > 0) {
            setState("Wizard",
                {
                    activeSteps: {
                        activeStep: 2
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
                    activeStep: 0
                }
            })

    };

    componentWillMount() {
        subscribe("Message", this);
    }

    render() {
        return (

            <div className={"col-12"} style={{textAlign: "center", width: '100%'}}>
                <br/>
                <br/>
                <h4>
                    Compose Message
                </h4>
                <br/>
                <TextField onChange={this.handleChange()} placeholder={"Type SMS message Here"} type="text"
                           multiline={true} rows={5} inputProps={{step: 300}}/>
                <br/>
                <br/>
                <Button raised color="accent" onClick={this.handlePrev()}>
                    Prev
                </Button>
                &nbsp;
                <Button raised color="accent" onClick={this.handleNext()}>
                    Next
                </Button>


            </div>
        )
    }

}


class Tags extends React.Component {
    state = {
        tags: []
    };
    handleTagChange = event => {
        setState("Tags", {tags: event.target.value});
    };
    handleNext = name => event => {
        if (this.state.tags.length > 0) {
            setState("Wizard",
                {
                    activeSteps: {
                        activeStep: 3
                    }
                })
        } else {
            swal("Oops!", "Choose One or more Tags", "error");
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
    tagAdded = name => {
        return (this.state.tags.indexOf(name) >= 0);
    }

    componentWillMount() {
        subscribe("Tags", this);
    }

    render() {
        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250,
                },
            },
        };

        var tags = [
            'Baringo',
            'IGAD-Officials',
            'Livestock',
            'Fish-Farming',
            'Beek-Keeping',
            'Pest-Contorl',
            'Floods',
        ];


        return (

            <div className={"col-12"} style={{textAlign: "center", width: '100%'}}>
                <br/>
                <br/>
                <h4>
                    Select Tags and User groups
                </h4>
                <br/>
                <Select
                    multiple
                    value={[...this.state.tags]}
                    onChange={this.handleTagChange}
                    input={<Input id="tag-multiple"/>}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {tags.map(tag => (
                        <MenuItem key={tag} value={tag}>
                            <Checkbox checked={this.tagAdded(tag)}/>
                            <ListItemText primary={tag}/>
                        </MenuItem>
                    ))}
                </Select>
                <br/>
                <br/>
                <Button raised color="accent" onClick={this.handlePrev()}>
                    Prev
                </Button>
                &nbsp;
                <Button raised color="accent" onClick={this.handleNext()}>
                    Broadcast Messages
                </Button>


            </div>
        )
    }

}

export default Wizard;
