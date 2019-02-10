import React from 'react'
import {Container, Header} from "semantic-ui-react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import RandomGif from "../randomGif.gif";

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
		<div className="homeFeaturesWrapper">
			<div className="diagonalAbsolute blue"></div>
			<div className="featureWrapper">
				
				<div className="text-wrapper smoothAppearText">
					<h1>The standard Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
				<img alt="" className="smoothAppearImageFromRight" src={RandomGif}/>
			</div>
		</div>
		
		<div className="homeFeaturesWrapper blue">
			<div className="diagonalAbsolute"></div>
			<div className="featureWrapper">
				<div className="text-wrapper smoothAppearText">
					<h1>The standard Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
				<img alt="" className="smoothAppearImageFromLeft" src={RandomGif}/>
			</div>
		</div>
		
		<div className="homeFeaturesWrapper">
			<div className="diagonalAbsolute blue"></div>
			<div className="featureWrapper">
				<div className="text-wrapper smoothAppearText">
					<h1>The standard Lorem Ipsum</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
				</div>
				<img alt="" className="smoothAppearImageFromRight" src={RandomGif}/>
			</div>
		</div>

    </Container>
);

export default OurFeatures;