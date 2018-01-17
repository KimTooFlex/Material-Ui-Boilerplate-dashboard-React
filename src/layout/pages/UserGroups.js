import React, {Component} from 'react';
import Button from 'material-ui/Button';

class UserGroups extends Component {
    render() {
        return (
            <div>
                <div className={"row"}>
                    <div className={"col"}>
                        <nav aria-label="breadcrumb" role="navigation">
                           <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">Sikizi</li>
                                <li className="breadcrumb-item active" aria-current="page">SMS</li>
                                <li className="breadcrumb-item"> User Groups (Tags) </li>
                            </ol>
                        </nav>
                    </div>

                </div>
                <div className={"row"}>
                    <div className={"col"}>

                       <Button raised color="accent" onClick={this.handleComplete}>
                            ADD USER-GROUP
                        </Button>
                    </div>
                    <div className={"col"}>

                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col"}>

                    </div>
                </div>
            </div>
        );
    }
}


export default UserGroups;
