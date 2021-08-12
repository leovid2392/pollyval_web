import React from "react";

import { MdPhonelinkRing } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import SocialIcons from "../../components/socialIcons/SocialIcons";

import "./Footer.css";

function Footer() {
	return (
		<footer className='home_footer'>
			<img
				className='footer_logoImage'
				src='https://res.cloudinary.com/leovid23/image/upload/v1628799930/pollyval/logo_fondo_dorado_wykq9c.png'
				alt='logo image'
			/>
			<div className='footer_info'>
				<section className='footer_services'>
					<h3 className='footer_sectionTitle'>Servicios</h3>
					<a href='#'>Atención a socios</a>
					<a href='#'>Post-Venta</a>
					<a href='#'>Cobranzas y negociación</a>
					<a href='#'>Porcesos y estadisticas</a>
					<a href='#'>Marketing digital </a>
				</section>
				<section className='footer_contactInfo'>
					<h3 className='footer_sectionTitle'>Contact Info</h3>
					<div className='contactInfo_item'>
						<span className='icon-white'>
							<MdPhonelinkRing />
						</span>
						<p> +52 (012) 802-2526</p>
					</div>
					<div className='contactInfo_item'>
						<span className='icon-white'>
							<FaRegEnvelope />
						</span>
						<p>info@pollyval.com</p>
					</div>
					<SocialIcons iconColor='icon-white' />
				</section>
			</div>
		</footer>
	);
}

export default Footer;
