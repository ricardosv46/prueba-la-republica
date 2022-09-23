import Container from '@components/Container/Container'
import React from 'react'
import Logo from '../../../public/Logo'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container padding={false}>
				<div className={styles.footer__container}>
					<div className={styles.links}>
						<a>Últimas noticias</a>
						<a>Política</a>
						<a>Elecciones 2022</a>
						<a>Economía</a>
						<a>Sociedad</a>
						<a>Deportes</a>

						<a>Espectáculos</a>
						<a>Cine & Series</a>
						<a>Mundo</a>
						<a>Tendencias</a>
						<a>Tecnología</a>
						<a>Cultura Asiática</a>

						<a>Columnistas</a>
						<a>Verificador</a>
						<a>Datos LR</a>
						<a>Argentina</a>
						<a>México</a>
						<a>Venezuela</a>

						<a>Loterías y sorteos</a>
						<a>Feriados 2022</a>
						<a>Horóscopo chino</a>
						<a>Nombre del Año 2022</a>
					</div>
					<div className={styles.box}>
						<Logo className={styles.footer__logo} />
						<p>©Todos los derechos reservados - 2022</p>
						<p>Políticas y estándares -Términos de Uso</p>
						<p>Contáctenos</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
