import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const links = [
	{
		id: 1,
		url: "/",
		text: "home",
	},
	{
		id: 2,
		url: "/about",
		text: "about",
	},
	{
		id: 3,
		url: "/services",
		text: "services",
	},
	{
		id: 4,
		url: "/contact",
		text: "contact",
	},
];

export const social = [
	{
		id: 1,
		url: "https://www.twitter.com",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: "https://www.twitter.com",
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: "https://www.twitter.com",
		icon: <FaInstagram />,
	},
];
