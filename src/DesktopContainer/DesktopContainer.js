import React from 'react'
import {Button, Container, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";

class DesktopContainer extends React.Component {

    state = {
        activeItem: 'Home'
    };

    showFixedMenu = () => this.setState({fixed: true});
    hideFixedMenu = () => this.setState({fixed: false, activeItem: 'Home'});

    handleItemClick = (e, {name}) => this.setState(name!='Home' ? {fixed: true, activeItem: name} : {activeItem: name});

    activateItem = (name) => this.setState({activeItem: name});

    render() {
        const {fixed, activeItem} = this.state;

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
                                    name={'Work'}
                                    active={activeItem === 'Work'}
                                    link={true}
                                    href={'#work'}
                                    onClick={this.handleItemClick}
                                >
                                    Work
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
                                    <Button as={'a'} inverted={!fixed}> Log In </Button>
                                    <Button as={'a'} inverted={!fixed} primary={fixed}
                                            style={{marginLeft: '0.5em'}}> Sign Up </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>
                <Visibility id={'work'}
                            style={{backgroundColor: 'green', minHeight: '1000px'}}
                            once={false} onTopPassed={() => this.activateItem('Work')}
                            onBottomPassedReverse={() => this.activateItem('Work')}
                />
                <Visibility id={'contacts'}
                            style={{backgroundColor: 'blue', minHeight: '1000px'}}
                            once={false} onTopPassed={() => this.activateItem('Contacts')}
                            onBottomPassedReverse={() => this.activateItem('Contacts')}
                />
            </Responsive>
        )
    }
}

export default DesktopContainer;