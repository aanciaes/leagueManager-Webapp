import React from 'react'
import FacebookLogin from 'react-facebook-login';

class PopUpSignUp extends React.Component {


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
                <div className="cross" onClick={this.props.handler}>
                    <div></div>
                    <div></div>
                </div>
                <div className="loginWrapper">
                    <form action="/login" method="get">
                        <div className="relative">

                            <input />
                            <label className="control-label">Username</label>
                        </div>
                        <div className="flex">
                            <div className="relative">
                                <input type={"password"}/>
                                <label className="control-label-2">Password</label>

                            </div>
                            <div className="relative">
                                <input type={"password"}/>
                                <label className="control-label-2">Confirm Password</label>

                            </div>

                        </div>
                        <div className="relative">
                            <input />
                            <label className="control-label">E-mail</label>
                        </div>
                        <button type={"submit"}> <div className={"whiteShadow"}/> <p>Sign Up  </p></button>
                    </form>
                    <div className="facebookLogin signup">
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