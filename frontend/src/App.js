import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Response from "./components/Response";

const style = {
    marginLeft: 12,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: undefined,
            response: undefined
        };
    };

    sendData() {
        fetch('http://192.168.99.100:8000/analytics/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({link: this.state.link})
        })
        .then(response => response.json())
        .then(data => this.setState(data));
    }

    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.sendData();
        }
    };

    setTextValue = (event) => {
        this.setState({link: event.target.value});
      }

    render() {
        const responseComponent = this.state.response !== undefined ?
        <Response data={this.state.response} /> :
        null;

        return (
            <MuiThemeProvider>
                <div className="centerize">
                    <Paper zDepth={1} className="content">
                        <h2>Welcome to BalanceCheck</h2>
                        {responseComponent}
                        <TextField 
                        onKeyUp={this.onEnterPress.bind(this)}
                        onChange={this.setTextValue}
                        placeholder="Enter any URL or link"/>
                        <Button style={style} onClick={this.sendData.bind(this)}>Go</Button>
                        
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;