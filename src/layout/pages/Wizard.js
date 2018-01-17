import React, {Component} from 'react';
import {subscribe, setState, getState} from "../../lib/Redux";
import Button from 'material-ui/Button';

class Wizard extends Component {
    state ={
       step: "TYPE"
    }

componentWillMount()
{
    subscribe("Wizard",this);
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
                            {page}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Step1 extends React.Component {
    state = {test: "Hellow"};

    componentWillMount() {
        subscribe("Step1", this);
     

    }


    componentDidMount() {

    }

    render() {
        return (
            <div>
                Hello world
            </div>)
    }

}

export default Wizard;
