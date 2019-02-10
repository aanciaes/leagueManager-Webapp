import React from 'react'
import {Container, Header} from "semantic-ui-react";
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
				className={'HomeHeadOver'}
                content={'Get in touch with us'}
                inverted
                style={{
					 color: 'black',
                    fontSize: '3em',
                    fontWeight: 'normal',
                    marginBottom: '100px',
					marginTop: '50px'
                }}
        />
		
		<div className="footerTabsWrapper">
			<div className="footerTab">
				<h1>COMPANY</h1>
				<p>About Us</p>
				<p>Terms</p>
				<p>Contact Us</p>
				<p>Brand Assets</p>
			</div>
			<div className="footerTab">
				<h1>SUPPORT</h1>
				<p>Getting Started</p>
				<p>Manage League</p>
				<p>About Account</p>
				
			</div>
			
			<div className="footerTab">
				<h1>LEGAL</h1>
				<p>Terms and Conditions</p>
				<p>Privacy policy</p>
			</div>
			<div className="footerTab">
				<h1>QUICK LINKS</h1>
				<div className="logosWrapper">
					<a className="socialWrapper" href="https://www.facebook.com/">
						<img alt="" src={FacebookLogo}/>
					</a>
					<a className="socialWrapper" href="https://twitter.com/">
						<img alt="" src={TwitterLogo}/>
					</a>
					<a className="socialWrapper" href="https://www.linkedin.com/">
						<img alt="" src={LinkedInLogo}/>
					</a>
					<a className="socialWrapper" href="https://www.instagram.com/">
						<img alt="" src={InstagramLogo}/>
					</a>
					<a className="socialWrapper" href="https://www.youtube.com/">
						<img alt="" src={YoutubeLogo}/>
					</a>
				</div>
				
			</div>
		</div>
		<div className="allRightsReserved">
			<p>All Rights Reserved - &copy; Badjoraz&nbsp;Corporation</p>
		</div>

    </Container>
);

export default Contacts;