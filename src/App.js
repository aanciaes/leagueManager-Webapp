import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ball from './Soccer_ball.svg';
import './App.css';
import $ from 'jquery';


class App extends Component {
    constructor() {
        super();
        this.state = {
            prop1: true,
            prop2: false
        }

    }

    test (){
        $.ajax({
            url: "http://localhost:8080/user",
            success: function(data){
                console.log(data);
            }});
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" render={() => (
                        <div className="App">
                            <img src={ball} className="App-logo" alt="logo"/>
                            <div className="wrapper-login">
                                <Input tag=" Username "/>
                                <Input tag=" Password "/>
                            </div>

                            <div className="button-login-wrapper">
                                <Button click = {this.test} tag=" GO "/>
                                <p>Ainda não tens conta? <Link className="link" to="/sign-up">Clica Aqui</Link> e vem
                                    jogar connosco! </p>
                            </div>
                        </div>
                    )}/>
                    <Route exact={true} path="/sign-up">
                        <div>
                            entrei!
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

class Input extends Component {

    render() {

        return (
            <div className="wrapper-input-login">
                <span>{this.props.tag}</span>
                <input></input>
            </div>
        );
    }

}

class Button extends Component {

    render() {
        return (
            <button onClick={this.props.click} type='submit'>{this.props.tag}</button>
        );
    }

}

export default App;