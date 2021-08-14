import React from "react";

import "./Hero.css";

function Hero() {
	return (
		<section className='home_hero'>
			<figure className='hero_imgContainer'>
				<img
					// src='https://res.cloudinary.com/leovid23/image/upload/v1628905470/pollyval/hero_garcii.jpg'
					// alt=''
					src='https://res.cloudinary.com/leovid23/image/upload/v1627771786/pollyval/shaking_hands_crmfgy.jpg'
					alt=''
				/>
			</figure>
			<h1 className='home_title'>
				Join us and double your earns <br /> in one year
			</h1>
		</section>
	);
}

export default Hero;
