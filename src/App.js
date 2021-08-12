import React from "react";

import Navbar from "./navBar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// import "./App.css";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<main>
				{/* <Hero /> */}
				<About />
				<Services />
				<Contact />
			</main>
			<Footer />
			{/* <main>
				<section className='App_hero'>
					<figure className='hero_imageContainer'>
						<div className='hero_text'>
							<h1>
								Join us <br /> and double your earns in 6 months
							</h1>
							<button>See how</button>
						</div>
						<img
							src='https://res.cloudinary.com/leovid23/image/upload/v1627771786/pollyval/shaking_hands_crmfgy.jpg'
							alt=''
						/>
					</figure>
				</section>
				<section className='App_about'>
					<h1 className='sectionTitle'>¿Quienes somos?</h1>
					<article className='about_infoContainer'>
						<figure className='about_imgContainer'>
							<img
								src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/services_callCenterAgent_k2i9ct.png'
								alt=''
							/>
						</figure>
						<div className='about_info'>
							<h5 className='about_infoTitle'>¿Quienes somos?</h5>
							<p className='about_text'>
								Somos una empresa líder capacitada para la reactivación de la
								cartera financiera de tus socios, renegociación, procesos y
								estadísticas.
							</p>
							<button className='btn'>Descubrir más</button>
						</div>
					</article>
					<div className='misionVision_container'>
						<div className='misionVision_categories'>
							<button>mision</button>
							<button>visión</button>
							<button>valores</button>
						</div>
						<div className='misionVision_description'>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Provident odit ipsa doloremque quidem laboriosam natus,
								inventore ipsam culpa quisquam rerum dolorem architecto facere!
								Corporis dicta numquam velit maiores excepturi aperiam vitae
								deleniti dolorum mollitia repellendus sunt, non expedita
								aliquid, quas doloremque incidunt sit nulla ipsam! non expedita
								aliquid, quas doloremque incidunt sit nulla ipsam!
							</p>
						</div>
					</div>
				</section>
				<section className='App_services'>
					<h1 className='sectionTitle'>Servicios</h1>
					<section className='services_container'>
						<article className='service'>
							<figure className='service_imgContainer'>
								<img
									src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/home_hero_jbin55.png'
									alt=''
								/>
								<div className='service_textBackground'>
									<div className='service_textContainer'>
										<h2 className='service_title'>Atención a Socios</h2>
										<p className='service_paragraph'>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Dolore voluptates, optio nihil similique neque sunt fuga,
											laborum, corrupti nostrum iste pariatur facere expedita
											tempora ducimus incidunt
										</p>
									</div>
								</div>
							</figure>
						</article>
					</section>
				</section>
				<section className='App_contact'>
					<section className='contact_socialContainer'>
						<h2 className='socialContainer_title'>
							Estaremos esperando <br></br> tu llamada
						</h2>
						<h3 className='socialContainer_quote'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
							labore recusandae error dicta distinctio ea magnam nobis.
						</h3>
						<h4 className='socialContainer_social'>
							Contactanos por medio de nuestras redes sociales
						</h4>

						<div className='social-iconsContainer'>
							<a className='social-iconLink' href=''>
								<span className='icon-white'>
									<FaFacebookF />
								</span>
							</a>
							<a className='social-iconLink' href=''>
								<span className='icon-white'>
									<FaTwitter />
								</span>
							</a>
							<a className='social-iconLink' href=''>
								<span className='icon-white'>
									<FaInstagram />
								</span>
							</a>
						</div>
					</section>
					<section className='contact_formContainer'>
						<h2 className='form_title'>Contáctanos</h2>
						<div className='form_contactNumber'>
							<div className='icon'>
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
			</main>
			<footer className='App_footer'>
				<figure className='footer_logoContainer'>
					<img
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771819/pollyval/logo_colores_snkf2f.jpg'
						alt=''
					/>
				</figure>
				<section className='footer_services'>
					<h3>Servicios</h3>
					<a href='#'>Atención a socios</a>
					<a href='#'>PostVenta</a>
					<a href='#'>Cobranzas y negociación</a>
					<a href='#'>Porcesos y estadisticas</a>
					<a href='#'>Marketing digital </a>
				</section>
				<section className='footer_contactInfo'>
					<h3>Contact Info</h3>
					<div className='contactInfo_item'>
						<MdPhonelinkRing />
						<p> +52 (012) 802-2526</p>
					</div>
					<div className='contactInfo_item'>
						<MdPhonelinkRing />
						<p>infopollyval@gmail.com</p>
					</div>
					<div className='social-iconsContainer'>
						<a className='social-iconLink' href=''>
							<span className='icon-gold'>
								<FaFacebookF />
							</span>
						</a>
						<a className='social-iconLink' href=''>
							<span className='icon-gold'>
								<FaTwitter />
							</span>
						</a>
						<a className='social-iconLink' href=''>
							<span className='icon-gold'>
								<FaInstagram />
							</span>
						</a>
					</div>
				</section>
			</footer> */}
		</div>
	);
}

export default App;
