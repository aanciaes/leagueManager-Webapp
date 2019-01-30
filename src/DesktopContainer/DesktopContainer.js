import React from 'react'
import {Button, Container, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";
import HomePage from "../home/Home";
import OurFeatures from "../home/OurFeatures";
import Contacts from "../home/Contacts";
import './ourApp.css';
import PopUpLogin from "../common/PopUpLogin.js";
import PopUpSignUp from "../common/PopUpSignUp.js";

class DesktopContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
    }

    state = {
        activeItem: 'Home',
        popUpLogIn: false,
        PopUpSignUp: false
    };
    showFixedMenu = () => this.setState({fixed: true});
    hideFixedMenu = () => this.setState({fixed: false, activeItem: 'Home'});
    handleLogIn () {
        if(this.state.PopUpSignUp && !this.state.popUpLogIn){
            this.setState({PopUpSignUp: !this.state.PopUpSignUp});
        }
        this.setState({popUpLogIn: !this.state.popUpLogIn});

    }

    handleSignUp () {
        if(this.state.popUpLogIn && !this.state.PopUpSignUp){
            this.setState({popUpLogIn: !this.state.popUpLogIn});
        }
        this.setState({PopUpSignUp: !this.state.PopUpSignUp});
    }

    handleItemClick = (e, {name}) => this.setState(name !== 'Home' ? {
        fixed: true,
        activeItem: name
    } : {activeItem: name});

    activateItem = (name) => this.setState({activeItem: name});

    render() {
        const {fixed, activeItem} = this.state;

        return (
            <Responsive minWidth={320}>
                <PopUpLogin isOpen = {this.state.popUpLogIn} handler ={this.handleLogIn}/>
                <PopUpSignUp isOpen = {this.state.PopUpSignUp} handler ={this.handleSignUp}/>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign={"center"}
                        style={{minHeight: 100, padding: '1em 0em'}}
                        vertical
                    >

                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size={'large'}
                        >
                            <Container>
                                <Menu.Item
                                    as={'a'}
                                    name={'Home'}
                                    active={activeItem === 'Home'}
                                    link={true}
                                    href={'#'}
                                    onClick={this.handleItemClick}
                                >
                                    Home
                                </Menu.Item>
                                <Menu.Item
                                    as={'a'}
                                    name={'Features'}
                                    active={activeItem === 'Features'}
                                    link={true}
                                    href={'#Features'}
                                    onClick={this.handleItemClick}
                                >
                                    Features
                                </Menu.Item>
                                <Menu.Item
                                    as={'a'}
                                    name={'Contacts'}
                                    active={activeItem === 'Contacts'}
                                    link={true}
                                    href={'#contacts'}
                                    onClick={this.handleItemClick}
                                >
                                    Contacts
                                </Menu.Item>
                                <Menu.Item position={'right'}>
                                    <Button onClick={this.handleLogIn.bind(this)} className={"logInButton"} as={'a'} inverted={!fixed}><div className={"whiteShadow"}/> <p>Log In </p></Button>
                                    <Button onClick={this.handleSignUp.bind(this)} as={'a'} inverted={!fixed} primary={fixed}
                                            style={{marginLeft: '0.5em'}}> <div className={"whiteShadow"}/> <p>Sign Up  </p></Button>
                                </Menu.Item>
                            </Container>
                        </Menu>

                        <HomePage/>
                    </Segment>
                </Visibility>
                <Visibility id={'Features'}
                            style={{paddingTop: '5em', minHeight: '1000px'}}
                            once={false} onTopPassed={() => this.activateItem('Features')}
                            onBottomPassedReverse={() => this.activateItem('Features')}
                >
                    <OurFeatures/>
                </Visibility>
                <Visibility id={'contacts'}
                            style={{paddingTop: '5em', minHeight: '400px'}}
                            once={false} onTopPassed={() => this.activateItem('Contacts')}
                            onBottomPassedReverse={() => this.activateItem('Contacts')}
                >
                    <Contacts/>
                </Visibility>
            </Responsive>
        )
    }
}

export default DesktopContainer;