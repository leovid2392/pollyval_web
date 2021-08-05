import React, { useState, useEffect, useRef } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { links, social } from "../data";

import "./Navbar2.css";

function Navbar2() {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<nav>
			<div className='home_nav'>
				<ul className='nav_links'>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Services</a>
					</li>
				</ul>
				<img
					src='https://res.cloudinary.com/leovid23/image/upload/v1627771819/pollyval/logo_colores_snkf2f.jpg'
					alt='logo'
				/>
				<ul className='nav_links'>
					<li>
						<a href=''>About</a>
					</li>
					<li>
						<a href=''>Contact</a>
					</li>
				</ul>
				<button
					className='nav_icon-dark'
					onClick={() => setShowLinks(!showLinks)}
				>
					<FaBars />
				</button>
			</div>
			<div
				className={`${
					showLinks ? "nav_container show_nav_container" : "nav_container"
				}`}
			>
				<button
					className='nav_icon-white'
					onClick={() => setShowLinks(!showLinks)}
				>
					<AiOutlineClose />
				</button>
				<ul className='nav_containerLinks'>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>Services</a>
					</li>
					<li>
						<a href=''>About</a>
					</li>
					<li>
						<a href=''>Contact</a>
					</li>
				</ul>
			</div>

			<h1>hola mundo</h1>
		</nav>
	);
}

export default Navbar2;
