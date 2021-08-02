import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App_navBar'>
				<div className='navBar_links'>
					<a href='#'>Home</a>
					<a href='#'>Services</a>
				</div>
				<figure className='navBar_logoContainer'>
					<img
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771819/pollyval/logo_colores_snkf2f.jpg'
						alt='logo'
					/>
				</figure>
				<div className='navBar_links'>
					<a href=''>About</a>
					<a href=''>Contact</a>
				</div>
			</header>
			<main>
				<section className='App_hero'>
					<figure className='hero_imageContainer'>
						<div className='hero_text'>
							<h1>Join us and double your earns in 6 months</h1>
							<button>See how</button>
						</div>
						<img
							src='https://res.cloudinary.com/leovid23/image/upload/v1627771786/pollyval/shaking_hands_crmfgy.jpg'
							alt=''
						/>
					</figure>
				</section>
				<section className='about'>
					<h1 className='about_sectionTitle'>¡Quienes somos?</h1>
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
				<section className='services'>
					<h1 className='sectionTitle'>Servicios</h1>
				</section>
				<section className='contact'>
					<h1>Contact</h1>
				</section>
			</main>
			<footer>
				<h1>Footer</h1>
			</footer>
		</div>
	);
}

export default App;
