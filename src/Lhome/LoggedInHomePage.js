import React from 'react'
import {Grid, Button, Container, Header, Icon, Image} from "semantic-ui-react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./loggedIn.css";
import NewsSlick from "../slick/newsSlick";

const LoggedInHomePage = () => (

    <Container text style={{marginBottom: '5em'}}>
        <Header as={'h1'}
                content={'Latest News'}
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '1em',
                }}
        />
        <NewsSlick />

    </Container>
);

export default LoggedInHomePage;