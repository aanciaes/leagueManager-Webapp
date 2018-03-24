import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import $ from 'jquery';


class App extends Component {
    constructor() {
        super();
        this.state = {
            errorEmail: false,
            errorPassword: false,
            errorUsername: false
        }

        this.signupHandler = this.signupHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);


    }

    test (){
        $.ajax({
            url: "http://localhost:8080/user",
            success: function(data){
                console.log(data);
            }});
    }

    componentDidMount() {
        this.footerImageChange();
     }

    signupHandler(){

        let email = $(document).find('input[name="email"]');
        let emailString = email[0].value;

        let username = $(document).find('input[name="username"]');
        let usernameString = username[0].value;

        let password = $(document).find('input[name="password"]');
        let passwordString = password[0].value;

        let error= false;
        let errorArray=[];

        this.setState({error:0});
       

        if(!/^[a-z0-9_-]{6,16}$/.test(usernameString)){
            this.setState({errorUsername:true});

            error = true;
            errorArray.push('Username must have between 6 and 16 characters.');
            $('#username-sign-up').css('border-color', 'rgb(252, 45, 45)');
        } 

        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/g.test(passwordString)){
            this.setState({errorPassword: true});

            error = true;
            errorArray.push('Password must have at least 6 characters, 1 number, 1 special and 1 upper case letter.');
            $('#password-sign-up').css('border-color', 'rgb(252, 45, 45)');
        }

        if(!/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]+$/g.test(emailString)){
            this.setState({errorEmail:true});
    
            error = true;
            errorArray.push('Invalid email.');
            $('#email-sign-up').css('border-color', 'rgb(252, 45, 45)');
        }  

        if(error){

            let errorMessage="";
            for(let i = 0; i<errorArray.length; i++){
                errorMessage += errorArray[i] + "<br>";
            }
            $('*[name=error]').html(errorMessage);
            $('*[name=error]').addClass('error');
        }
        else{
            let json = {
                mail:emailString,
                name:usernameString,
                hashedPassword:passwordString
            }


            $.ajax({
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                url: "/api/user",
                data: JSON.stringify(json),
                success: function(data){
                    console.log(data);
                    alert("YEEEE");
                }});
        }

    }

    changeUsernameHandler(){
        $('#username-sign-up').css('border-color', 'white');
        this.setState({errorUsername:false});
    
        if(!this.state.errorEmail && !this.state.errorPassword && !this.state.errorUsername){
            $('*[name=error]').html("");
        } 
    }

    changeEmailHandler(){
        $('#email-sign-up').css('border-color', 'white');
        this.setState({errorEmail:false});
    
        if(!this.state.errorEmail && !this.state.errorPassword && !this.state.errorUsername){
            $('*[name=error]').html("");
        } 
       
    }

    changePasswordHandler(){
        $('#password-sign-up').css('border-color', 'white');
        this.setState({errorPassword:false});
    
        if(!this.state.errorEmail && !this.state.errorPassword && !this.state.errorUsername){
            $('*[name=error]').html("");
        } 
     }

    importAll(r) {
        return r.keys().map(r);
    }
    
    footerImageChange(){
        
        const images = this.importAll(require.context('./footer_balls/', false, /\.(svg)$/));
        let random = Math.floor(Math.random() * images.length);
        $('#footer-image').attr('src', images[random]);
        
        setInterval(function(){
            let random = Math.floor(Math.random() * images.length);
            $('#footer-image').attr('src', images[random]);
            
        }, 10000);


    
    }
    

    render() {
       
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" render={() => (
                        <div className="App">
                            {this.footerImageChange}
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
                                <img src="" className="App-logo" alt=""/>
                            </div>
                            <div className="footer">
                            </div>
                        </div>
                    )}/>
                    <Route exact={true} path="/sign-up">
                        <div className="App">
                            <h1 className="title"> SIGN UP NOW </h1>
                                <div className="sign-side">
                                    <Input id="username-sign-up" name="username" tag="Username" type="input" class="wrapper-input-login" change={this.changeUsernameHandler}/>
                                    <Input id="password-sign-up" name="password" tag="Password" type="password" class="wrapper-input-login"  change={this.changePasswordHandler}/>
                                    <Input id="email-sign-up" name="email" tag="E-mail" type="input" class="wrapper-input-login"  change={this.changeEmailHandler}/>
                                    <Button tag = "Submit" id="submit-sign-up" click={this.signupHandler}/> 
                                    <div className="errorWrapper">
                                        <p name="error"></p>
                                    </div>  
                                </div>
                            <div className="ball-wrapper">
                                <img id="footer-image" src="" className="App-logo" alt=""/>
                            </div>
                            <div className="footer"></div> 
                         
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
                <div>
                    <p>{this.props.tag}</p>
                </div>
                <input id={this.props.id} name={this.props.name} type={this.props.type} onChange={this.props.change} ></input>
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
