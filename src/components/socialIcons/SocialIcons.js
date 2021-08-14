import React from "react";

import { social } from "../../data";

import "./SocialIcons.css";

function SocialIcons({ iconColor }) {
	return (
		<div className='social-iconsContainer'>
			{social.map((link) => {
				const { id, url, icon } = link;
				return (
					<a key={id} href={url} className='social-iconLink'>
						<span className={iconColor}>{icon}</span>
					</a>
				);
			})}
		</div>
	);
}

export default SocialIcons;
