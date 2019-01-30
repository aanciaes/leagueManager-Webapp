import React from 'react'
import FacebookLogin from 'react-facebook-login';

class PopUpSignUp extends React.Component {
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
                        <div class="flex">
                            <div>
                                <label>Password</label>
                                <input type={"password"}/>
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input type={"password"}/>
                            </div>

                        </div>

                        <label>E-mail</label>
                        <input />
                        <button type={"submit"}> <div className={"whiteShadow"}/> <p>Sign Up  </p></button>
                    </form>
                    <div class="facebookLogin signup">
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

export default PopUpSignUp;