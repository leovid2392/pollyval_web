import React from "react";

import { MdPhonelinkRing } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import SocialIcons from "../../components/socialIcons/SocialIcons";

import "./Contact.css";

function Contact() {
	return (
		<section className='home_contact'>
			<section className='contact_socialContainer'>
				<div className='social_text'>
					<h2>
						Estaremos esperando <br /> tu llamada
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
						labore recusandae error dicta distinctio ea magnam nobis.
					</p>
					<h3>Contactanos por medio de nuestras redes sociales</h3>
				</div>

				<SocialIcons iconColor='icon-white' />
			</section>
			<section className='contact_formContainer'>
				<h2 className='form_title'>Contáctanos</h2>
				<div className='form_contactNumber'>
					<div className='icon-yellow'>
						<MdPhonelinkRing />
					</div>
					<h3> (555) 802-1234 </h3>
				</div>
				<form className='contactForm' action=''>
					<input type='text' placeholder='nombre' />
					<input type='email' placeholder='email' />
					<input type='text' placeholder='número telefonico' />
					<button className='contactForm_submmitBtn' type='summit'>
						Enviar datos
					</button>
				</form>
				<p className='form_legals'>
					Al enviar mis datos, autorizo ser contactado
				</p>
			</section>
		</section>
	);
}

export default Contact;
