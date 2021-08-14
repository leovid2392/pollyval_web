import React, { useState } from "react";

import "./About.css";
function About() {
	// const [index, setIndex] = useState(1);
	const [text, setText] = useState(
		"mision Lorem ipsum dolor sit amet consectetur Somos una empresa líder capacitada para la reactivación de la cartera financiera de tus socios, renegociación, procesos y estadísticas."
	);

	const handleMision = () => {
		setText(
			"mision Lorem ipsum dolor sit amet consectetur Somos una empresa líder capacitada para la reactivación de la cartera financiera de tus socios, renegociación, procesos y estadísticas."
		);
	};
	const handleVision = () => {
		setText(
			"vision Lorem ipsum dolor sit amet consectetur Somos una empresa líder capacitada para la reactivación de la cartera financiera de tus socios, renegociación, procesos y estadísticas."
		);
	};
	const handleValores = () => {
		setText(
			"valores Lorem ipsum dolor sit amet consectetur Somos una empresa líder capacitada para la reactivación de la cartera financiera de tus socios, renegociación, procesos y estadísticas."
		);
	};

	return (
		<section className='home_about'>
			<h1 className='sectionTitle'>¿Quienes somos?</h1>
			<section className='about_description'>
				<div className='home_content'>
					<img
						className='about_image'
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/services_callCenterAgent_k2i9ct.png'
						alt=''
					/>
					<div className='about_info'>
						{/* <h5 className='about_infoTitle'>¿Quienes somos?</h5> */}
						<p className='about_text'>
							Somos una empresa líder capacitada para la reactivación de la
							cartera financiera de tus socios, renegociación, procesos y
							estadísticas.
						</p>
						{/* <button className='btn'>Descubrir más</button> */}
					</div>
				</div>
			</section>
			<section className='about_misionVision'>
				<div className='misionVision_titleContainer'>
					<button onClick={handleMision}>misión</button>
					<button onClick={handleVision}>visión</button>
					<button onClick={handleValores}>valores</button>
				</div>
				<div className='misionVision_descriptionContainer'>
					<p className='misionVision_text'>{text}</p>
				</div>
			</section>
		</section>
	);
}

const misionVision = ["mision", "vision", "valores"];
export default About;
