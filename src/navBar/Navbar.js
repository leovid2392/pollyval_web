import React, { useState, useEffect, useRef } from "react";

import { FaBars } from "react-icons/fa";
import { links, social } from "../data";

import "./Navbar.css";

function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		console.log(linksHeight);
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);

	return (
		<nav>
			<div className='nav_center'>
				<div className='nav_header'>
					<img
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771819/pollyval/logo_colores_snkf2f.jpg'
						alt='pollyval logo'
					/>
					<button
						className='nav_toggle'
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>

				<div className='links_container' ref={linksContainerRef}>
					<ul className='links' ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
