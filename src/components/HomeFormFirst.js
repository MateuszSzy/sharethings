import React,{Component} from 'react';
import "./../scss/styles/HomeFormFourth.scss";
import moduleName from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {MuiThemeProvider} from "material-ui";

export class HomeFormFirst extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="fourth__container">
                <div className="alert__container">
                    <h2 className="alert__title">pierwszy</h2>
                    <p className="alert__description">Uzupełnij szczegóły dotyczące Twoich rzeczy.
                        Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
                    </p>
                </div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText="enter your street name"
                            onChange={handleChange('streetName')}
                            defaultValue={values.streetName}
                        />
                        <RaisedButton
                            label="Dalej"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        >

                        </RaisedButton>

                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default HomeFormFirst;