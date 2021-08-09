import React from "react";

import "./Services.css";

function Services() {
	return (
		<section className='home_services'>
			<h1 className='sectionTitle'>Servicios</h1>
			<div className='services_container'>
				<article className='service'>
					<img
						className='service_image'
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/home_hero_jbin55.png'
						alt='equipo de bienvenida'
					/>
					<div className='serviceText_container'>
						<h1 className='service_title'>Atencion a socios</h1>
						<p className='service_para'>
							Nuestro objetivo es dar resolución y aclaración a todas las dudas
							que puedan surgir referente al uso de la membresía, contratos,
							formas de pago.
						</p>
					</div>
				</article>
				<article className='service service_reverse'>
					<img
						className='service_image'
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/home_hero_jbin55.png'
						alt='equipo de bienvenida'
					/>
					<div className='serviceText_container'>
						<h1 className='service_title'>Post-Venta</h1>
						<p className='service_para'>
							Nos encargamos de dar control y seguimiento a las ventas penders
							por procesar con el propósito de nutrir financieramente la cartera
							de la empresa.
						</p>
					</div>
				</article>
				<article className='service'>
					<img
						className='service_image'
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/home_hero_jbin55.png'
						alt='equipo de bienvenida'
					/>
					<div className='serviceText_container'>
						<h1 className='service_title'>Cobranzas y Negociación</h1>
						<p className='service_para'>
							Nos encargamos de recuperar la cartera financiera demorada por
							medio de la renegociación, evaluación y control de los pagos.
							Nuestro propósito es mantener el 85% de su cartera activa y el 15%
							con solicitud de cancelación en renegociación.
						</p>
					</div>
				</article>
				<article className='service service_reverse'>
					<img
						className='service_image'
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/home_hero_jbin55.png'
						alt='equipo de bienvenida'
					/>
					<div className='serviceText_container'>
						<h1 className='service_title'>Procesos y Estadísticas</h1>
						<p className='service_para'>
							Se presentan los datos estadísticos con acceso exclusivo para
							dirección, gerentes, supervisores y personal autorizado con el
							objetivo de facilitar el control de sus equipos de trabajo.
						</p>
					</div>
				</article>
				<article className='service'>
					<img
						className='service_image'
						src='https://res.cloudinary.com/leovid23/image/upload/v1627771788/pollyval/home_hero_jbin55.png'
						alt='equipo de bienvenida'
					/>
					<div className='serviceText_container'>
						<h1 className='service_title'>Marketing Digital</h1>
						<p className='service_para'>
							Aplicación de estrategias de comercialización para los medios
							digitales: desarrollo web, social media, etc.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Services;
