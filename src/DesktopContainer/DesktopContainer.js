import React from 'react'
import {Container, Menu, Responsive, Segment, Visibility} from "semantic-ui-react";

class DesktopContainer extends React.Component {

    state = {
        activeItem: 'Home'
    };

    showFixedMenu = () => this.setState ({fixed: true});
    hideFixedMenu = () => this.setState ({fixed: false});

    handleItemClick = (e, {name}) => this.setState ({activeItem: name});


    render () {
        const { fixed, activeItem } = this.state;

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
                            fixed = {fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size={'large'}
                        >
                            <Container>
                                <Menu.Item
                                    as={'a'}
                                    name={'Home'}
                                    active={activeItem ==='Home'}
                                    onClick={this.handleItemClick}
                                >
                                    Home
                                </Menu.Item>
                                <Menu.Item
                                    as={'a'}
                                    name={'Work'}
                                    active={activeItem ==='Work'}
                                    link={true}
                                    href={'#'}
                                    onClick={this.handleItemClick}
                                >
                                    Work
                                </Menu.Item>
                            </Container>

                        </Menu>

                    </Segment>

                </Visibility>

            </Responsive>
        )
    }
}

export default DesktopContainer;