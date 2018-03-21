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

    signupHandler(){

        let form = $('#form-signup');

        let email = $(document).find('input[name="email"]');
        let emailString = email[0].value;

        let username = $(document).find('input[name="username"]');
        let usernameString = username[0].value;

        if(!/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]+$/g.test(emailString)){
           $('*[name=error').text('some fields ar invalid');
           $('*[name=error]').addClass('input-error');
        }  
        
        if(!/^[a-zA-Z0-9-_\!\@\#\$\%\^&\*]{5,16}+$/.test(usernameString)){
           
        }
    }

    changeEmailHandler(){
        
    }

    

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" render={() => (
                        <div className="App">
                           
                            <div className="wrapper-login">
                                <Input tag=" Username " type="input" class="wrapper-input-login"/>
                                <Input tag=" Password " type="password" class="wrapper-input-login"/>
                            </div>

                            <div className="button-login-wrapper">
                                <Button click = {this.test} tag=" GO " id="submit-sign-in"/>
                                <p>Ainda não tens conta? <Link className="link" to="/sign-up">Clica Aqui</Link> e vem
                                    jogar connosco! </p>
                            </div>
                            <div className="ball-wrapper">
                                <img src={ball} className="App-logo" alt="logo"/>
                            </div>
                            <div className="footer">
                            </div>
                        </div>
                    )}/>
                    <Route exact={true} path="/sign-up">
                        <div className="App">
                          <h1 className="title"> SIGN UP NOW </h1>
                          <form id="form-signup">
                          <div className="sign-side">
                            <Input name="username" tag="Username" type="input" class="wrapper-input-login"/>
                            <Input name="password" tag="Password" type="password" class="wrapper-input-login"/>
                            <Input name="email" tag="E-mail" type="input" class="wrapper-input-login"/>
                            <Button tag = "Submit" id="submit-sign-up" click={this.signupHandler}/> 
                            <p name="error"></p>
                            <div className="ball-wrapper">
                                <img src={ball} className="App-logo" alt="logo"/>
                            </div>
                            <div className="footer"></div>
                          </div> 
                          </form> 
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
            
            <div className={this.props.class}>
                <span>{this.props.tag}</span>
                <input name={this.props.name} type={this.props.type} onChange={this.props.change} ></input>
            </div>
        );
    }

}

class Button extends Component {

    render() {
        return (
            <button id={this.props.id} onClick={this.props.click} type='button'>{this.props.tag}</button>
        );
    }

}

export default App;