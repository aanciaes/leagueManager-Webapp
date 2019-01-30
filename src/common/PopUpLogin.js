import React from 'react'
import FacebookLogin from 'react-facebook-login';

class PopUpLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    responseFacebook = (response) => {
        console.log(response);
    }

    closePopUp () {
        this.props.isOpen = false;
    }

    render() {
        let boxClass = ["overPopUp"];
        if(this.props.isOpen) {
            boxClass.push('open');
        }
        return(
            <div className={boxClass.join(' ')}>
                <div class="cross" onClick={this.props.handler}>
                    <div></div>
                    <div></div>
                </div>
                <div class="loginWrapper">
                    <form action="/login" method="get">
                        <label>Username</label>
                        <input />
                        <label>Password</label>
                        <input type={"password"}/>
                        <button type={"submit"}> <div className={"whiteShadow"}/> <p>Log In  </p></button>
                    </form>
                    <div class="facebookLogin">
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