import React, {Component} from 'react';
import {subscribe, setState, getState} from "../../lib/Redux";
import Button from 'material-ui/Button';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';

class Wizard extends Component {
    state ={
       step: "TYPE",
        activeSteps:  {
            activeStep: 1,
            skipped: new Set(),
        }
    }

componentWillMount()
{
    subscribe("Wizard",this);
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

    isStepOptional = step => {
        return step === 1;
    };

    isStepSkipped(step) {
        return this.state.activeSteps.skipped.has(step);
    }


render() {

        const page = (<Step1 />);




        return (
            <div>
                <div>
                    <div className={"row"}>
                        <div className={"col"}>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Sikizi</li>
                                    <li className="breadcrumb-item active" aria-current="page">SMS</li>
                                    <li className="breadcrumb-item"> Create Broadcast </li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                    <div className={"row"}>
                        <div className={"col"}>

                            {/*<Button raised color="accent" onClick={this.handleComplete}>*/}
                                {/*ADD USER-GROUP*/}
                            {/*</Button>*/}
                        </div>
                        <div className={"col"}>

                        </div>
                    </div>
                      <hr/>
                    <div className={"row"}>
                        <div className={"col"}>
                            <Stepper activeStep={this.state.activeSteps}>
                                {this.getSteps().map((label, index) => {
                                    const props = {};
                                    const labelProps = {};

                                    if (this.isStepSkipped(index)) {
                                        props.completed = false;
                                    }

                                    return (
                                        <Step key={label} {...props}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                            {page}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Step1 extends React.Component {
    state = {

    };

    componentWillMount() {
        subscribe("Step1", this);

    }


    componentDidMount() {

    }

    render() {
        return (
            <div>

            </div>)
    }

}

export default Wizard;
