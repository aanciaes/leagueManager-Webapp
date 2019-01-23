import React from 'react'
import {Button, Container, Header, Icon} from "semantic-ui-react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import HomeSlick from "../slick/homeSlick";

const HomePage = () => (

    <Container text style={{marginBottom: '5em'}}>
		<HomeSlick/>
        <Header as={'h1'}
                content={'League Manager'}
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '1em',
                }}
        />

        <Header
            as='h2'
            content='Amateur Football league Manager'
            inverted
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
        />
        <Button style={{marginTop: '2em'}} size={'huge'} primary animated>
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>
                Let's Go <Icon name='arrow right' style={{paddingLeft: '0.5em'}}/>
            </Button.Content>
        </Button>

    </Container>
);

export default HomePage;