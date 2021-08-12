import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./SocialIcons.css";

function SocialIcons({ iconColor }) {
	return (
		<div className='social-iconsContainer'>
			<a className='social-iconLink' href=''>
				<span className={iconColor}>
					<FaFacebook />
				</span>
			</a>
			<a className='social-iconLink' href=''>
				<span className={iconColor}>
					<FaTwitter />
				</span>
			</a>
			<a className='social-iconLink' href=''>
				<span className={iconColor}>
					<FaInstagram />
				</span>
			</a>
		</div>
	);
}

export default SocialIcons;
