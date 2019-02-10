import React from 'react'
import FacebookLogin from 'react-facebook-login';
import $ from 'jquery';
import 'jquery.cookie';

class PopUpLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogInVerification = this.handleLogInVerification.bind(this)
    }

    responseFacebook = (response) => {

    }

    closePopUp () {
        this.props.isOpen = false;
    }

    handleLogInVerification(){
        if($("#username").value !== "" && $("#password").value !== ""){
            let user = $("#username").val();
            this.props.loggedIn(user);//$.cookie('loggedIn', true);
        }

    }

    render() {
        let boxClass = ["overPopUp"];
        if(this.props.isOpen) {
            boxClass.push('open');
        }
        return(
            <div className={boxClass.join(' ')}>
                <div className={"cross"} onClick={this.props.handler}>
                    <div></div>
                    <div></div>
                </div>
                <div className={"loginWrapper"}>
                    <form>
                        <div className={"relative"}>
                            <input id={"username"}/>
                            <label className="control-label" htmlFor="username">Username</label>
                        </div>

                        <div className={"relative"}>
                            <input id="password" type={"password"}/>
                            <label className="control-label">Password</label>
                        </div>
                        <button onClick={this.handleLogInVerification.bind(this)} type={"button"}> <div className={"whiteShadow"}/> <p>Log In  </p></button>
                    </form>
                    <div className={"facebookLogin"}>
                        <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default PopUpLogin;