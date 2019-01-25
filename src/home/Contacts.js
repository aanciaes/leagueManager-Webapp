import React from 'react'
import {Button, Container, Header, Icon} from "semantic-ui-react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import TwitterLogo from "../logos/twitter.png";
import FacebookLogo from "../logos/facebook.png";
import LinkedInLogo from "../logos/linkedin.png";
import InstagramLogo from "../logos/instagram.png";
import YoutubeLogo from "../logos/youtube.png";

const Contacts = () => (

    <Container text style={{marginBottom: '0em', textAlign: 'center'}}>
        <Header as={'h1'}
                content={'Get in touch with us'}
                inverted
                style={{
					 color: 'black',
                    fontSize: '3em',
                    fontWeight: 'normal',
                    marginBottom: '100px',
					marginTop: '50px',
					color: 'white'
                }}
        />
		
		<div class="footerTabsWrapper">
			<div class="footerTab">
				<h1>COMPANY</h1>
				<p>About Us</p>
				<p>Terms</p>
				<p>Contact Us</p>
				<p>Brand Assets</p>
			</div>
			<div class="footerTab">
				<h1>SUPPORT</h1>
				<p>Getting Started</p>
				<p>Manage League</p>
				<p>About Account</p>
				
			</div>
			
			<div class="footerTab">
				<h1>LEGAL</h1>
				<p>Terms and Conditions</p>
				<p>Privacy policy</p>
			</div>
			<div class="footerTab">
				<h1>QUICK LINKS</h1>
				<div class="logosWrapper">
					<a class="socialWrapper" href="https://www.facebook.com/">
						<img src={FacebookLogo}/>
					</a>
					<a class="socialWrapper" href="https://twitter.com/">
						<img src={TwitterLogo}/>
					</a>
					<a class="socialWrapper" href="https://www.linkedin.com/">
						<img src={LinkedInLogo}/>
					</a>
					<a class="socialWrapper" href="https://www.instagram.com/">
						<img src={InstagramLogo}/>
					</a>
					<a class="socialWrapper" href="https://www.youtube.com/">
						<img src={YoutubeLogo}/>
					</a>
				</div>
				
			</div>
		</div>
		<div class="allRightsReserved">
			<p>All Rights Reserved - &copy; Badjoraz&nbsp;Corporation</p>
		</div>

    </Container>
);

export default Contacts;