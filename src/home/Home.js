import React from 'react'
import {Button, Container, Header, Icon} from "semantic-ui-react";

const HomePage = () => (

    <Container text style={{marginBottom: '10em'}}>
        <Header as={'h1'}
                content={'League Manager'}
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em',
                }}
        />

        <Header
            as='h2'
            content='Amator Football league Manager'
            inverted
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
        />
        <Button animated>
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>
                <Icon name='arrow right' />
            </Button.Content>
        </Button>

    </Container>
);

export default HomePage;