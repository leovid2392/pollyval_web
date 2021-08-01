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
					<h1>¡Quienes somos?</h1>
				</section>
				<section className='services'>
					<h1>Servicios</h1>
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
