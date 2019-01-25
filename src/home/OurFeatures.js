import React from 'react'
import {Button, Container, Header, Icon} from "semantic-ui-react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const OurFeatures = () => (

    <Container text style={{marginBottom: '0em', textAlign: 'center'}}>
        <Header as={'h1'}
				className={'HomeHeadOver'}
                content={'Our Features'}
                inverted
                style={{
					 color: 'black',
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: '0px',
                }}
        />

        <Header
            as='h2'
            content="Here's some of our best features"
            inverted
            style={{
				 color: 'black',
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginBottom: '3.5em',
				marginTop: '-3.9em',
            }}
        />
		<div class="homeFeaturesWrapper">
			<div class="diagonalAbsolute blue"></div>
			<div class="featureWrapper">
				
				<div class="text-wrapper">
					<h1>The standard Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
				<img src="/static/media/random.0c58cef5.png"/>
			</div>
		</div>
		
		<div class="homeFeaturesWrapper blue">
			<div class="diagonalAbsolute"></div>
			<div class="featureWrapper">
				<div class="text-wrapper">
					<h1>The standard Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
				<img src="/static/media/random.0c58cef5.png"/>
			</div>
		</div>
		
		<div class="homeFeaturesWrapper">
			<div class="diagonalAbsolute blue"></div>
			<div class="featureWrapper">
				<div class="text-wrapper">
					<h1>The standard Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
				<img src="/static/media/random.0c58cef5.png"/>
			</div>
		</div>

    </Container>
);

export default OurFeatures;